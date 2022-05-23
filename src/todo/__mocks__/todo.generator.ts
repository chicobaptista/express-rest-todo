import { faker } from '@faker-js/faker'

export const fakeTodo = () => ({
    title: faker.fake(
        '{{hacker.verb}} the {{hacker.adjective}} {{hacker.noun}}',
    ),
    description: faker.hacker.phrase(),
    complete: faker.datatype.boolean(),
})

export const fakeTodoRequest = () => ({
    body: fakeTodo(),
})
