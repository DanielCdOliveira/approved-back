import { Request, Response } from "express";

import * as studyServices from "../services/studyServices.js"
import {createDate} from "../utils/utils.js"
import { compareUserFolder } from "../services/folderServices.js";
import { compareUserSubject } from "../services/topicServices.js";
import { compareUserTopic } from "../services/topicServices.js";

export async function createStudy(req: Request, res: Response) {
    const { folderId, subjectId, topicId } = req.body
    const userId = res.locals.userId;
    const date = createDate()
    await compareUserFolder(userId, folderId)
    await compareUserSubject(userId, subjectId)
    await compareUserTopic(userId, topicId)
    await studyServices.insertStudyDb({folderId, subjectId,topicId, userId, date})
    res.sendStatus(201)
}
export async function getAllStudiesFromFolder(req: Request, res: Response) {
    const {userId} = res.locals
    const folderId = parseInt(req.params.id)
    const historic = await studyServices.getAllStudies(userId, folderId)
    res.status(200).send(historic)
}