import jwt from 'jsonwebtoken'

const JWTGenerator = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "20d"
    })
}

export default JWTGenerator