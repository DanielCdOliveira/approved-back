import { CreateStudyData } from "../interfaces/interfaces.js"
import dayjs from "dayjs"
import * as studyRepository from "../repositories/studyRepository.js"
import * as topicRepository from "../repositories/topicRepository.js"

export async function insertStudyDb(newStudy: CreateStudyData) {
    await studyRepository.insertStudyDb(newStudy)
}
export async function getAllStudies(userId: number, folderId: number) {
    return await studyRepository.getAllStudies(userId, folderId)
}
export async function deleteStudyByFolderId(folderId:number) {
    await studyRepository.deleteStudyByFolderId(folderId)
}
