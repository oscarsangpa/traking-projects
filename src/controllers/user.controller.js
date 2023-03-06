import User from '../models/User.model.js'

const register = async (req, res) => {
    try {
        const user = new User(req.body)
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