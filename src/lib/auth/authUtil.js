import jwt  from "jsonwebtoken";
import env  from 'dotenv';
import bcrypt from 'bcrypt'

env.config()
const SECRET = process.env.SECRET

//returns a token jwt
export function generateToken(email, password) {
    return jwt.sign({email: email}, SECRET, {expiresIn: 600})

}

export function verifyToken(token) {
    let bool = false
    try {
        jwt.verify(token, SECRET, (error, decoded) => {
            if (error) {
                console.log(error)
                bool = false
            }
            if (decoded) {
                console.log(decoded)
                bool = true
            }
        }) 
        return bool
    } catch (error) {
        console.log(error)
        return false
    }     
}
export async function hashPassword(plaintextPassword) {
    return await bcrypt.hash(plaintextPassword, 10);
    // Store hash in the database
}
 
// compare password
export async function comparePassword(plaintextPassword, hash) {
    const result = await bcrypt.compare(plaintextPassword, hash);
    return result;
}