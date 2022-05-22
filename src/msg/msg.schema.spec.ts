import { describe, it } from 'mocha'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'

import { createMsgReqSchema } from './msg.schema'

chai.use(chaiAsPromised)
const { expect } = chai

describe('CreateMsgRequest Schema', () => {
    const validateOptions = {
        stripUnknown: true,
    }
    describe('On a valid request', () => {
        const mockMsg = {
            body: { msg: 'testMsg', msg1: 'testErrorMsg' },
        }
        it('should validate schema and strip unkown properties of an object', async () => {
            const validatedData = await createMsgReqSchema.validate(
                mockMsg,
                validateOptions,
            )

            expect(validatedData.body).to.have.property(
                'msg',
                mockMsg.body.msg,
                'should have msg property with value intact',
            )
            expect(validatedData.body).to.not.have.property(
                'msg1',
                mockMsg.body.msg1,
                'should strip unknown property',
            )
        })
    })

    describe('On an invalid request', () => {
        it('should throw if no msg field is present', async () => {
            const res = createMsgReqSchema.validate(
                { msg1: 'test' },
                validateOptions,
            )
            await expect(res).to.eventually.be.rejectedWith(
                'msg is a required field',
            )
        })
    })
})
