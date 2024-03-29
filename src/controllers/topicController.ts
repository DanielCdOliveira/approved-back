import { Request, Response } from "express";

import * as topicServices from "../services/topicServices.js"
export async function createTopic(req: Request, res: Response) {
    const { name, isDone, subjectId,folderId } = req.body
    const userId = res.locals.userId
    await topicServices.compareUserSubject(userId, subjectId)
    await topicServices.insertSubjectDb({ name, subjectId, isDone, userId, folderId })
    res.sendStatus(201)
}
export async function completeTopic(req: Request, res: Response) {    
    const userId = res.locals.userId
    const topicId = parseInt(req.params.id)
    await topicServices.compareUserTopic(userId, topicId)
    await topicServices.completeTopic(topicId)
    res.sendStatus(200)
}
export async function deleteTopic(req: Request, res: Response) {
    const userId = res.locals.userId
    const topicId = parseInt(req.params.id)
    await topicServices.compareUserTopic(userId, topicId)
    await topicServices.deleteTopicByTopicId(topicId)
    res.sendStatus(204)
}