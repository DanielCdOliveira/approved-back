import { CreateSubjectData } from "../interfaces/interfaces.js"

import * as subjectRepository from "../repositories/subjectRepository.js"
import * as folderServices from "../services/folderServices.js"
export async function insertSubjectDb(newSubject: CreateSubjectData) {
    await subjectRepository.insertSubjectDb(newSubject)
}
export async function compareUserFolder(userId : number, folderId : number) {
    const folder = await folderServices.getFolderById(folderId)
    if(folder.userId !== userId){
        throw {
            type:"not_found",
            message:"folder does not belong to the user"
        }
    }
}
