/* istanbul ignore file */
import { NextFunction, Request, Response } from 'express'
import { loggerConfig } from '../config'
export function errorLoggerMiddleware(
    error: Error,
    _req: Request,
    _res: Response,
    next: NextFunction,
) {
    // eslint-disable-next-line no-undef
    if (loggerConfig.ERRORS) console.error(error)
    next(error)
}
