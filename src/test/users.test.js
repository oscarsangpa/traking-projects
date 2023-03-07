import supertest from "supertest"
import mongoose from "mongoose"
import { app, server } from '../app'

const newUser = {
    name: "Oscar",
    email: "correo@correo.com",
    password: "password"
}


const api = supertest(app)

test('endpoint returned a json', async () => {
    await api
        .post('/api/users/register')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('User there are not in database', async () => {
    await api
        .post('/api/users/login')
        .expect(404)
        .expect('Content-Type', /application\/json/)
})



afterAll(() => {
    mongoose.connection.close()
    server.close()
})
