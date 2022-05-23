import { InferType, boolean, object, string } from 'yup'

export const createTodoReqSchema = object({
    body: object({
        title: string().required(),
        description: string(),
        complete: boolean().default(false),
    }),
})
export interface CreateTodoRequest
    extends InferType<typeof createTodoReqSchema> {}
