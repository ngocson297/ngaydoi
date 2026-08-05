import "node:assert/strict";
import assert from "node:assert/strict";
import { hashPassword, verifyPassword } from "../src/common/security/password.js";
import { createOpaqueToken, hashToken } from "../src/common/security/token.js";
import { AccessTokenService } from "../src/auth/access-token.service.js";

async function main(): Promise<void> {
  const password = "StrongPass123";
  const passwordHash = await hashPassword(password);
  assert.match(passwordHash, /^scrypt\$/);
  assert.equal(await verifyPassword(password, passwordHash), true);
  assert.equal(await verifyPassword("WrongPass123", passwordHash), false);

  const tokenA = createOpaqueToken();
  const tokenB = createOpaqueToken();
  assert.notEqual(tokenA, tokenB);
  assert.equal(hashToken(tokenA), hashToken(tokenA));
  assert.notEqual(hashToken(tokenA), hashToken(tokenB));

  process.env.JWT_ACCESS_SECRET = "local-self-test-secret-that-is-longer-than-32-characters";
  process.env.ACCESS_TOKEN_TTL_SECONDS = "900";
  const accessTokens = new AccessTokenService();
  const token = accessTokens.sign(
    { id: "user_test", email: "test@ngaydoi.vn", role: "CUSTOMER", authVersion: 0 },
    "session_test",
  );
  const claims = accessTokens.verify(token);
  assert.equal(claims.sub, "user_test");
  assert.equal(claims.sid, "session_test");

  assert.throws(() => accessTokens.verify(`${token.slice(0, -1)}x`));
  console.log("Security self-test passed: password hashing, opaque tokens and access-token signatures.");
}

void main();
