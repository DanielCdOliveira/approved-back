import { CreateFolderData } from "../interfaces/interfaces.js"
import * as folderRepository from "../repositories/folderRepository.js"

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