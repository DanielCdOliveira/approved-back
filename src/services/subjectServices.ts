import { CreateSubjectData } from "../interfaces/interfaces.js"
import { deletePlannerBySubjectId } from "./plannerServices.js"
import { deleteReviewBySubjectId } from "./reviewServices.js"
import { deleteStudyBySubjectId } from "./studyServices.js"
import { deleteTopicBySubjectId } from "./topicServices.js"
import * as subjectRepository from "../repositories/subjectRepository.js"
export async function insertSubjectDb(newSubject: CreateSubjectData) {
    await subjectRepository.insertSubjectDb(newSubject)
}
export async function getSubjectById(id: number) {
    return await subjectRepository.getSubjectById(id)
}
export async function deleteSubjectByFolderId(folderId:number) {
    await subjectRepository.deleteSubjectByFolderId(folderId)
}
export async function deleteSubjectBySubjectId(subjectId:number) {
    await subjectRepository.deleteSubjectBySubjectId(subjectId)
}
export async function deleteSubjectDependencesBySubjectId(folderId:number) {
    await deletePlannerBySubjectId(folderId)
    await deleteReviewBySubjectId(folderId)
    await deleteStudyBySubjectId(folderId)
    await deleteTopicBySubjectId(folderId)
    await deleteSubjectBySubjectId(folderId)
}