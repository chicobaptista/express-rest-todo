/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express'

export interface MessageController {
    createMessage(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response>
}
