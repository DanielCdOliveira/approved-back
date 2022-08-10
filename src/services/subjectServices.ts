import { CreateSubjectData } from "../interfaces/interfaces.js"

import * as subjectRepository from "../repositories/subjectRepository.js"
export async function insertSubjectDb(newSubject: CreateSubjectData) {
    await subjectRepository.insertSubjectDb(newSubject)
}
export async function getSubjectById(id: number) {
    return await subjectRepository.getSubjectById(id)
}
