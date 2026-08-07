import "reflect-metadata";
import { Logger, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { GlobalExceptionFilter } from "./common/http/global-exception.filter.js";
import { AppModule } from "./app.module.js";
async function bootstrap() {
    const app = await NestFactory.create(AppModule, { bufferLogs: true });
    app.useLogger(new Logger());
    app.enableShutdownHooks();
    app.setGlobalPrefix("api");
    const allowedOrigins = (process.env.FRONTEND_URL ?? "http://localhost:3000").split(",").map((value) => value.trim()).filter(Boolean);
    app.enableCors({ origin: allowedOrigins, credentials: true, methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"], maxAge: 600 });
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true, forbidNonWhitelisted: true }));
    app.useGlobalFilters(new GlobalExceptionFilter());
    const instance = app.getHttpAdapter().getInstance();
    instance.set?.("trust proxy", Number(process.env.TRUST_PROXY_HOPS ?? 1));
    const port = Number(process.env.API_PORT ?? 4000);
    await app.listen(port, "0.0.0.0");
    Logger.log(JSON.stringify({ type: "service_started", service: "ngaydoi-api", port, version: process.env.APP_VERSION ?? "0.15.14", environment: process.env.NODE_ENV ?? "development" }), "Bootstrap");
}
void bootstrap();
//# sourceMappingURL=main.js.map