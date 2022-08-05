import { CreateStudyData } from "../interfaces/interfaces.js"
import dayjs from "dayjs"
import * as studyRepository from "../repositories/studyRepository.js"
import * as topicRepository from "../repositories/topicRepository.js"

export async function insertStudyDb(newStudy: CreateStudyData) {
    await studyRepository.insertStudyDb(newStudy)
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