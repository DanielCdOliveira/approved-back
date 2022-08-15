import { Request, Response } from "express";

import * as reviewServices from "../services/reviewServices.js"
import { compareUserTopic } from "../services/topicServices.js";
import { compareUserFolder } from "../services/folderServices.js";
import { compareUserSubject } from "../services/topicServices.js";

export async function createReview(req: Request, res: Response) {
    const { folderId, subjectId,topicId, date } = req.body
    const userId = res.locals.userId;
    await compareUserFolder(userId, folderId)
    await compareUserSubject(userId, subjectId)
    await compareUserTopic(userId, topicId)
    await reviewServices.insertReviewDb({ folderId, subjectId,topicId, userId, date })
    res.sendStatus(201)
}
export async function getAllReviewsFromUser(req: Request, res: Response) {
    const {userId} = res.locals
    const reviews = await reviewServices.getAllReviews(userId)
    res.status(200).send(reviews)
}
export async function deleteReview(req: Request, res: Response) {
    const reviewId = parseInt(req.params.id)
    await reviewServices.deleteReviewByReviewId(reviewId)
    res.sendStatus(204)
}