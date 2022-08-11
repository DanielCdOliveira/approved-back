import { Request, Response } from "express";

import * as subjectServices from "../services/subjectServices.js"
import * as folderServices from "../services/folderServices.js"
export async function createSubject(req: Request, res: Response) {
    const {name, isDone , folderId} = req.body
    const userId = res.locals.userId
    await folderServices.compareUserFolder(userId,folderId)
    await subjectServices.insertSubjectDb({ name, folderId, isDone, userId })
    res.sendStatus(201)
}