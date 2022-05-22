import { AnyObjectSchema } from 'yup'

export const mockSchema = {
    validate: (body) => Promise.resolve({ ...body }),
} as unknown as AnyObjectSchema
