import { NextFunction, Request, Response } from "express";

import * as userServices from "../services/userServices.js"

export default async function verifyToken(req : Request, res : Response, next : NextFunction) {
    const { authorization } = req.headers;
    const id = await userServices.checkToken(authorization)  
    res.locals.userId = id
    next()
}