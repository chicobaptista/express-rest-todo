/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express'
import { ApiError } from './api-errors/apiError'

export function errorParserMiddleware(
    error: Error,
    req: Request,
    res: Response,
    _next: NextFunction,
) {
    let parsedError
    if (error instanceof ApiError) parsedError = error
    else parsedError = new ApiError(error.message)
    return res
        .status(parsedError.status)
        .json({ type: parsedError.name, message: parsedError.message })
}
