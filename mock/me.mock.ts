import { MockMethod } from 'vite-plugin-mock';
export const meMock: MockMethod = {
    url: '/api/v1/me',
    method: 'get',
    // timeout: 1000,
    statusCode: 200,
    response: (): Resource<User> => {
        return {
            resource: {
                id: 1,
                email: 'hmx@hmx.com',
                updated_at: '2021-08-01T00:00:00.000Z',
                created_at: '2021-08-01T00:00:00.000Z'
            }
        }
    },
}