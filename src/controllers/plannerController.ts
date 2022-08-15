import { Request, Response } from "express";

import { compareUserFolder } from "../services/folderServices.js";
import { compareUserSubject } from "../services/topicServices.js";
import { compareUserTopic } from "../services/topicServices.js";
import * as plannerServices from "../services/plannerServices.js"

export async function createPlanner(req: Request, res: Response) {
    const { folderId, subjectId, topicId } = req.body
    const { userId } = res.locals
    await compareUserFolder(userId, folderId)
    await compareUserSubject(userId, subjectId)
    await compareUserTopic(userId, topicId)
    await plannerServices.createPlannerDb({ ...req.body, userId })
    res.sendStatus(201)
}
export async function getAllPlannersOfFolder(req: Request, res: Response) {
    const { userId } = res.locals
    const folderId = parseInt(req.params.folderId)
    const planner = await plannerServices.getAllPlannersOfFolder(userId, folderId)
    res.status(200).send(planner)
}
export async function getAllPlannersOfUser(req: Request, res: Response) {
    const { userId } = res.locals
    const planner = await plannerServices.getAllPlannersOfUser(userId)
    res.status(200).send(planner)
}
export async function deletePlanner(req: Request, res: Response) {
    const userId = res.locals.userId
    const plannerId = parseInt(req.params.id)
    await plannerServices.deletePlannerByPlannerId(plannerId)
    res.sendStatus(204)
}