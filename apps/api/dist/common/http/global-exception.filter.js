var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var GlobalExceptionFilter_1;
import { Catch, HttpException, HttpStatus, Logger } from "@nestjs/common";
let GlobalExceptionFilter = GlobalExceptionFilter_1 = class GlobalExceptionFilter {
    logger = new Logger(GlobalExceptionFilter_1.name);
    catch(exception, host) {
        const context = host.switchToHttp();
        const request = context.getRequest();
        const response = context.getResponse();
        const isHttp = exception instanceof HttpException;
        const status = isHttp ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
        const exceptionResponse = isHttp ? exception.getResponse() : null;
        const publicMessage = status >= 500
            ? "Hệ thống đang gặp sự cố. Vui lòng thử lại sau."
            : typeof exceptionResponse === "string"
                ? exceptionResponse
                : typeof exceptionResponse === "object" && exceptionResponse && "message" in exceptionResponse
                    ? exceptionResponse.message
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
};
GlobalExceptionFilter = GlobalExceptionFilter_1 = __decorate([
    Catch()
], GlobalExceptionFilter);
export { GlobalExceptionFilter };
//# sourceMappingURL=global-exception.filter.js.map