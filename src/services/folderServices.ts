import { CreateFolderData } from "../interfaces/interfaces.js"
import * as folderRepository from "../repositories/folderRepository.js"

export async function insertFolderDb(newFolder: CreateFolderData) {
    await folderRepository.insertFolderDb(newFolder)
}
// export async function getAllSubjects(userId){
//     const result =  (await folderRepository.(userId)).rows
//     return result
// }