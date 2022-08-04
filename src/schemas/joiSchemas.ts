import joi from "joi"

import { CreateUserData,LoginUserData } from "../interfaces/interfaces"

export const signupSchema = joi.object<CreateUserData>({
    name: joi.string().min(1).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
})
export const signinSchema = joi.object<LoginUserData>({
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
})