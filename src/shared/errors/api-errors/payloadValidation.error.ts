import { ApiError } from './apiError'

export class PayloadValidationError extends ApiError {
    /* istanbul ignore next */
    constructor(message?: string) {
        super(message || 'Invalid payload.', 400)
    }
}
