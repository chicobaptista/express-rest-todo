import { NextFunction, Request, Response } from 'express'
import { AnySchema } from 'yup'
import { PayloadValidationError } from './errors/api-errors/payloadValidation.error'

export const validate =
    (schema: AnySchema) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { body, query, params } = req
            const validated = await schema.validate(
                {
                    body,
                    query,
                    params,
                },
                {
                    stripUnknown: true,
                    abortEarly: false,
                },
            )
            Object.assign(req, { ...validated })
            return next()
        } catch (err) {
            const error = new PayloadValidationError(err.errors.join(', '))
            return next(error)
        }
    }
