/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express'
import { MessageController } from '../msg.controller.interface'

export const controller: MessageController = {
    createMessage: (_req: Request, res: Response, _next: NextFunction) =>
        Promise.resolve(res.json({})),
}
