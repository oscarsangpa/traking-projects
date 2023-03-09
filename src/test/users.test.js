import supertest from "supertest"
import mongoose from "mongoose"
import { app, server } from '../app'
const api = supertest(app)

const newUser = {
    name: "name",
    email: "email@email.com",
    password: "password"
}

describe('POST /users/register', () => {
    test('Should check if email already exist', async () => {
        const response = await api
            .post('/api/users/register')
            .send(newUser.email)
        expect(response.body.email).not.toEqual(newUser.email)
    })
    test('Should respond with status 200', async () => {
        await api.post('/api/users/register').send(newUser)
        expect(200)
        expect('Content-Type', /application\/json/)
    })
})




afterAll(() => {
    mongoose.connection.close()
    server.close()
})
