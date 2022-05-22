/* istanbul ignore file */
import { Router } from 'express'
import { Routes } from './routes.enum'
import { createMsgReqSchema } from '../msg/msg.schema'
import { controller as msgController } from '../msg/msg.controller'
import msgRouter from '../msg/msg.router'

const router = Router()

router.use(Routes.Message, msgRouter(msgController, createMsgReqSchema))

export default router
