import bcrypt from "bcrypt";

import { CreateUserData } from "../interfaces/interfaces.js";
import { insertUserDb } from "../repositories/userRepository.js"
const SALT = parseInt(process.env.SALT)

export async function createUser(user: CreateUserData) {
    user.password = bcrypt.hashSync(user.password, SALT);
    await insertUserDb(user);
}
