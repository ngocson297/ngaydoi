import { Catch, HttpException, HttpStatus, Logger, type ArgumentsHost, type ExceptionFilter } from "@nestjs/common";
import type { Request, Response } from "express";

interface RequestWithId extends Request { requestId?: string }

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const context = host.switchToHttp();
    const request = context.getRequest<RequestWithId>();
    const response = context.getResponse<Response>();
    const isHttp = exception instanceof HttpException;
    const status = isHttp ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    const exceptionResponse = isHttp ? exception.getResponse() : null;
    const publicMessage = status >= 500
      ? "Hệ thống đang gặp sự cố. Vui lòng thử lại sau."
      : typeof exceptionResponse === "string"
        ? exceptionResponse
        : typeof exceptionResponse === "object" && exceptionResponse && "message" in exceptionResponse
          ? (exceptionResponse as { message: unknown }).message
          : "Request failed";
    if (status >= 500) {
      this.logger.error(JSON.stringify({
        type: "unhandled_exception",
        requestId: request.requestId,
        method: request.method,
        path: request.originalUrl,
        error: exception instanceof Error ? exception.message : String(exception),
        stack: exception instanceof Error ? exception.stack : undefined,
      }));
    }
    response.status(status).json({
      statusCode: status,
      message: publicMessage,
      requestId: request.requestId,
      timestamp: new Date().toISOString(),
      path: request.originalUrl,
    });
  }
}
