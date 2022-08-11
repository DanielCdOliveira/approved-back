import { Request, Response } from "express";

import { compareUserFolder } from "../services/folderServices.js";
import { compareUserSubject } from "../services/topicServices.js";
import { compareUserTopic } from "../services/studyServices.js";
import * as plannerServices from "../services/plannerServices.js"

export async function createPlanner(req: Request, res: Response){
const {folderId, subjectId, topicId} = req.body
const {userId} = res.locals
await compareUserFolder(userId,folderId )
await compareUserSubject(userId, subjectId)
await compareUserTopic(userId, topicId)
await plannerServices.createPlannerDb({...req.body,userId})
res.sendStatus(201)
}