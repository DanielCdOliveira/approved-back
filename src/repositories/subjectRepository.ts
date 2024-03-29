import { prisma } from "../config/database.js";

import { CreateSubjectData } from "../interfaces/interfaces"

export async function insertSubjectDb(newSubject: CreateSubjectData) {
  try {
    await prisma.subject.create({ data: newSubject })
  } catch (error) {
    if (error.code === "P2002") {
      throw {
        type: "conflict",
        message: "subject already registered"
      }
    }
  }
}
export async function getSubjectById(id: number) {
  const subject = await prisma.subject.findFirst({ where: { id } })
  if (!subject) {
    throw {
      type: "not_found",
      message: "subject not found"
    }
  }
  return subject
}
export async function deleteSubjectByFolderId(folderId: number) {
  await prisma.subject.deleteMany({ where: { folderId } })
}
export async function deleteSubjectBySubjectId(subjectId: number) {
  try {
    await prisma.subject.delete({ where: { id: subjectId } })
  } catch (error) {
    console.log(error);

  }
}