import User from '../models/User.model.js'
import { idGenerator } from '../helpers/idGenerator.js'

const register = async (req, res) => {
    // avoid duplicate register
    const { email } = req.body
    const isExist = await User.findOne({ email })

    if (isExist) {
        const error = new Error("Email already exist")
        return res.status(400).json({ msg: error.message })
    }

    try {
        const user = new User(req.body)
        user.token = idGenerator()
        const newUser = await user.save()
        res.json(newUser)
    } catch (error) {
        console.log(error)
    }

    res.json({ msg: "creando usuario" })
}

export {
    register
}