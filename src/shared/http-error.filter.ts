import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from "@nestjs/common";
import { response } from "express";

@Catch()
export class HttpErrorFilter implements ExceptionFilter{
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const req = ctx.getRequest()
        const res = ctx.getResponse()
        const status = exception.getStatus()

        const errorResponse = {
            code: status,
            timeStamp: new Date().toLocaleDateString(),
            path: req.url,
            method: req.method,
            message: exception.message + ' (File Not Found)' || null
        }

        Logger.error(`${req.method} ${req.url}`, JSON.stringify(errorResponse), 'ExceptionFilter')

        res.status(404).json({errorResponse})
    }
}