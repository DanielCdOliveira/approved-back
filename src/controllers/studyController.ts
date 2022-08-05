import { Request, Response } from "express";

import * as studyServices from "../services/studyServices.js"
import {createDate} from "../utils/utils.js"

export async function createStudy(req: Request, res: Response) {
    const { topicId, time } = req.body
    const userId = res.locals.userId;
    const date = createDate()
    await studyServices.compareUserTopic(userId,topicId)    
    await studyServices.insertStudyDb({topicId, userId, time, date})
    res.sendStatus(201)
}