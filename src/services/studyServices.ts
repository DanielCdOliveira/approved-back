import { CreateStudyData } from "../interfaces/interfaces.js"
import * as studyRepository from "../repositories/studyRepository.js"

export async function insertStudyDb(newFolder: CreateStudyData) {
    await studyRepository.insertStudyDb(newFolder)
}
// export async function getAllFolders(userId : number){
//     const result =  await studyRepository.getAllFolders(userId)
//     return result
// }
// export async function getFolderById(id: number) {
//     return studyRepository.getFolderById(id)
// }