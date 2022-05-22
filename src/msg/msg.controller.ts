import { NextFunction, Request, Response } from 'express'
import { MessageController } from './msg.controller.interface'
import { MsgRequest } from './msg.schema'

async function createMessage(req: Request, res: Response, next: NextFunction) {
    try {
        const { body }: { body: MsgRequest } = req
        return res.status(201).json(body)
    } catch (error) {
        next(error)
    }
}

export const controller: MessageController = {
    createMessage,
}
