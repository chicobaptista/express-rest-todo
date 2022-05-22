import { InferType, object, string } from 'yup'

export const createMsgReqSchema = object({
    body: object({
        msg: string().required(),
    }),
})

export interface MsgRequest extends InferType<typeof createMsgReqSchema> {}
