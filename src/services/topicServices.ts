import { CreateTopicData } from "../interfaces/interfaces.js"

import * as topicRepository from "../repositories/topicRepository.js"
import * as subjectServices from "../services/subjectServices.js"
export async function insertSubjectDb(newTopic: CreateTopicData) {
    await topicRepository.insertSubjectDb(newTopic)
}
export async function compareUserSubject(userId: number, subjectId: number) {
    const subject = await subjectServices.getSubjectById(subjectId)
    if (subject.userId !== userId) {
        throw {
            type: "not_found",
            message: "subject does not belong to the user"
        }
    }
}
export async function getTopicById(id: number) {
    return await topicRepository.getTopicById(id)
}
export async function compareUserTopic(userId: number, topicId: number) {
    const topic = await topicRepository.getTopicById(topicId)
    if (topic.userId !== userId) {
        throw {
            type: "not_found",
            message: "topic does not belong to the user"
        }
    }
}
export async function completeTopic(topicId : number) {
    await topicRepository.completeTopic(topicId)
}
export async function deleteTopicByFolderId(folderId:number) {
    await topicRepository.deleteTopicByFolderId(folderId)
}