import { Request, Response } from "express";

import * as subjectServices from "../services/subjectServices.js"
export async function createSubject(req: Request, res: Response) {
    const {name, isDone , folderId} = req.body
    const userId = res.locals.userId
    await subjectServices.compareUserFolder(userId,folderId)
    await subjectServices.insertSubjectDb({ name, folderId, isDone })
    res.sendStatus(201)
}