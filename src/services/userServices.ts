import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { CreateUserData, LoginUserData } from "../interfaces/interfaces.js";
import * as userRepository from "../repositories/userRepository.js"
const SALT = parseInt(process.env.SALT)
const JWT_KEY = process.env.JWT_KEY
export async function createUser(user: CreateUserData) {
    user.password = bcrypt.hashSync(user.password, SALT);
    await userRepository.insertUserDb(user);
}
export async function loginUser(userLogin: LoginUserData) {
    const user = await getUserByEmail(userLogin.email)
    console.log(user);
    
    if (!user || !bcrypt.compareSync(userLogin.password, user.password)) {
        throw {
            type: "unauthorized",
            message: "invalid username and password"
        }
    }
    const token = jwt.sign({ userId: user.id }, JWT_KEY);
    console.log(token);
    
    return({ token, userId: user.id, name: user.name });


}
async function getUserByEmail(email: string) {
    return userRepository.getUserByEmail(email)
}
