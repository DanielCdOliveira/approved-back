import { NextFunction, Request, Response } from "express";


export default async function verifyToken(req : Request, res : Response, next : NextFunction) {
    const { authorization } = req.headers;
    // const id = await authService.checkToken(authorization)   
    // res.locals.userId = id
    next()
}