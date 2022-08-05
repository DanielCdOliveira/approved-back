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
export const folderSchema = joi.object({
    name: joi.string().min(1).required()
})
export const subjectSchema = joi.object({
    name: joi.string().min(1).required(),
    folderId:joi.number().integer().min(1).required(),
    isDone: joi.boolean().required()
})
export const topicSchema = joi.object({
    name: joi.string().min(1).required(),
    subjectId:joi.number().integer().min(1).required(),
    isDone: joi.boolean().required()
})
export const studySchema = joi.object({
    topicId:joi.number().integer().min(1).required(),
    time: joi.number().integer().min(1).required()
})