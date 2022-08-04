import dotenv from "dotenv";

import { Request, Response } from "express";
import * as userServices from "../services/userServices.js";

dotenv.config();

export async function signUp(req: Request, res: Response) {
    const user = req.body;
    await userServices.createUser(user)
    return res.sendStatus(201);
}

export async function signIn(req, res) {
    const user = req.body
    const data = await userServices.loginUser(user)
    res.status(200).send(data)
}