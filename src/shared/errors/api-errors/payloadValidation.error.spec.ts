import { describe, it } from 'mocha'
import { PayloadValidationError } from './payloadValidation.error'
import { expect } from 'chai'

describe('PayloadValidationError', () => {
    const DEFAULTS = {
        name: 'PayloadValidationError',
        status: 400,
        message: 'Invalid payload.',
    }

    it('should have default parameters', () => {
        try {
            throw new PayloadValidationError()
        } catch (error) {
            expect(error.name).to.equal(
                DEFAULTS.name,
                'should have the default PayloadValidationError name',
            )
            expect(error.message).to.equal(
                DEFAULTS.message,
                'should have default error message',
            )
            expect(error.status).to.equal(
                DEFAULTS.status,
                'should have BadRequest status',
            )
        }
    })
    it('should have message passed on constructor', () => {
        const customMessage = 'Custom validation message'
        try {
            throw new PayloadValidationError(customMessage)
        } catch (error) {
            expect(error.name).to.equal(
                DEFAULTS.name,
                'should have the default PayloadValidationError name',
            )
            expect(error.message).to.equal(
                customMessage,
                'should have error message passed on constructor',
            )
            expect(error.status).to.equal(
                DEFAULTS.status,
                'should have BadRequest status',
            )
        }
    })
})
