import { randomBytes, scrypt, timingSafeEqual } from "node:crypto";
const KEY_LENGTH = 64;
const SCRYPT_OPTIONS = { N: 16_384, r: 8, p: 1, maxmem: 64 * 1024 * 1024 };
function derive(password, salt) {
    return new Promise((resolve, reject) => {
        scrypt(password, salt, KEY_LENGTH, SCRYPT_OPTIONS, (error, key) => {
            if (error)
                reject(error);
            else
                resolve(key);
        });
    });
}
export async function hashPassword(password) {
    const salt = randomBytes(16).toString("hex");
    const key = await derive(password, salt);
    return `scrypt$${salt}$${key.toString("hex")}`;
}
export async function verifyPassword(password, encoded) {
    const [algorithm, salt, hash] = encoded.split("$");
    if (algorithm !== "scrypt" || !salt || !hash)
        return false;
    const expected = Buffer.from(hash, "hex");
    const actual = await derive(password, salt);
    return expected.length === actual.length && timingSafeEqual(expected, actual);
}
//# sourceMappingURL=password.js.map