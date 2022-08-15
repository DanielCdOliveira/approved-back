import { CreateFolderData } from "../interfaces/interfaces.js"
import * as folderRepository from "../repositories/folderRepository.js"
import { deletePlannerByFolderId } from "./plannerServices.js"
import { deleteReviewByFolderId } from "./reviewServices.js"
import { deleteStudyByFolderId } from "./studyServices.js"
import { deleteSubjectByFolderId } from "./subjectServices.js"
import { deleteTopicByFolderId } from "./topicServices.js"

export async function insertFolderDb(newFolder: CreateFolderData) {
    await folderRepository.insertFolderDb(newFolder)
}
export async function getAllFolders(userId : number){
    const result =  await folderRepository.getAllFolders(userId)
    return result
}
export async function compareUserFolder(userId: number, folderId: number) {
    const folder = await getFolderById(folderId)
    if (folder.userId !== userId) {
        throw {
            type: "not_found",
            message: "folder does not belong to the user"
        }
    }
    return folder
}
export async function getFolderById(id: number) {
    return folderRepository.getFolderById(id)
}
export async function deleteFolderDependencesByFolderId(folderId:number) {
    await deletePlannerByFolderId(folderId)
    await deleteReviewByFolderId(folderId)
    await deleteStudyByFolderId(folderId)
    await deleteTopicByFolderId(folderId)
    await deleteSubjectByFolderId(folderId)
    await folderRepository.deleteFolderByFolderId(folderId)
}