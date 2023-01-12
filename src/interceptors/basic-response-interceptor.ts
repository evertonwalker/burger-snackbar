import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";
import { FastifyReply } from "fastify";

export class BasicResponseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            tap(() => {
                const res = context.switchToHttp().getResponse<FastifyReply<any>>();
                res.header('test', 'walker');
            })
        );
    }
}