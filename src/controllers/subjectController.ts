import { Request, Response } from "express";

import * as subjectServices from "../services/subjectServices.js"
import * as folderServices from "../services/folderServices.js"
import { compareUserSubject } from "../services/topicServices.js";
export async function createSubject(req: Request, res: Response) {
    const {name, isDone , folderId} = req.body
    const userId = res.locals.userId
    await folderServices.compareUserFolder(userId,folderId)
    await subjectServices.insertSubjectDb({ name, folderId, isDone, userId })
    res.sendStatus(201)
}
export async function deleteSubject(req: Request, res: Response) {
    const userId = res.locals.userId
    const subjectId = parseInt(req.params.id)
    await compareUserSubject(userId, subjectId)

    res.sendStatus(204)
}