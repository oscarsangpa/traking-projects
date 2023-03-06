import User from '../models/User.model.js';
import { idGenerator } from '../helpers/idGenerator.js';
import JWTGenerator from '../helpers/JWTGenerator.js';

const register = async (req, res) => {
    // avoid duplicate register
    const { email } = req.body;
    const isExist = await User.findOne({ email });

    if (isExist) {
        const error = new Error('Email already exist');
        return res.status(400).json({ msg: error.message });
    }

    try {
        const user = new User(req.body);
        user.token = idGenerator();
        const newUser = await user.save();
        res.json(newUser);
    } catch (error) {
        console.log(error);
    }

    res.json({ msg: 'creando usuario' });
};

const authenticate = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        const error = new Error(`User doesn't exists`);
        return res.status(404).json({ msg: error.message });
    }

    if (!user.confirmed) {
        const error = new Error('Account not confirmed. Check your email');
        return res.status(404).json({ msg: error.message });
    }

    if (await user.checkPassword(password)) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: JWTGenerator(user._id)
        })
    } else {
        const error = new Error('Incorrect credentials');
        return res.status(404).json({ msg: error.message });
    }
};

export { register, authenticate };
