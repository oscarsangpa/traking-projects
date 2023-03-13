import supertest from "supertest"
import mongoose from "mongoose"
import { app, server } from '../app'
import { newUser } from "./utils/helpers"
import User from "../models/User.model"
const api = supertest(app)


describe('POST /users/register', () => {
    test('Should check if user is already exist', async () => {
        await api
            .post('/api/users/register')
            .send(newUser)
        const findedUserbyId = User.findById({})

        expect(findedUserbyId).not.toContain(newUser)
    })
    test('Should respond with status 200', async () => {
        await api.post('/api/users/register').send(newUser)
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })
})

describe('POST /users/login', () => {
    test('Should change confirmed value to true', async () => {
        await api
            .post('/api/users/login')
            .send(newUser)
        const findedUser = User.findOneAndReplace({ confirmed: false }, { ...newUser, confirmed: true }, { returnNewDocument: true })
        console.log(findedUser)
        expect(findedUser._update.confirmed).toEqual(true)
    })
})




afterAll(() => {
    mongoose.connection.close()
    server.close()
})
