import { AnyObjectSchema } from 'yup'
import { MessageController } from './msg.controller.interface'
import { Router } from 'express'
import { validate } from '../shared/validator.utils'

export default (controller: MessageController, schema: AnyObjectSchema) => {
    const router = Router()

    router.post('/', validate(schema), controller.createMessage)
    return router
}
