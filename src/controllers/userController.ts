import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import * as userServices from "../services/userServices.js";
dotenv.config();

export async function signUp(req: Request, res: Response) {
    const user = req.body;
    await userServices.createUser(user)
    return res.sendStatus(201);
}

export async function signIn(req, res) {
    // try {
    //     const user = (await authRepository.verifyUser(req.body.email)).rows[0];
    //     if (!user) return res.sendStatus(401);

    //     if (user && bcrypt.compareSync(req.body.password, user.password)) {
    //         const key = process.env.JWT_SECRET;
    //         const expiresAt = { expiresIn: 60 * 60 * 24 };

    //         const sessionId = (
    //             await authRepository.createSession(user.id)
    //         ).rows[0].id;
    //         const token = jwt.sign({ sessionId, userId: user.id }, key, expiresAt);
    //         return res
    //             .status(200)
    //             .send({ token, userId: user.id, name: user.name });
    //     }
    //     return res.sendStatus(401);
    // } catch (error) {
    //     return res.sendStatus(500);
    // }
}