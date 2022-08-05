import { CreateTopicData } from "../interfaces/interfaces.js"

import * as topicRepository from "../repositories/topicRepository.js"
import * as subjectServices from "../services/subjectServices.js"
export async function insertSubjectDb(newTopic: CreateTopicData) {
    await topicRepository.insertSubjectDb(newTopic)
}
export async function compareUserTopic(userId: number, subjectId: number) {
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