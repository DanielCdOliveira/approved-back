import { prisma } from "../config/database.js";
import { CreateStudyData } from "../interfaces/interfaces.js"

export async function insertStudyDb(newStudy: CreateStudyData) {
  try {
    await prisma.study.create({ data: newStudy })
  } catch (error) {
    if (error.code === "P2002") {
      throw {
        type: "conflict",
        message: "study already registered"
      }
    }
  }
}
// export async function getAllFolders(userId: number) {
//   return prisma.folder.findMany({ where: { userId },include:{Subject:{include:{Topic:{}}}} })
// }
// export async function getFolderById(id: number) {
//   const folder = await prisma.folder.findFirst({ where: { id } })
//   if (!folder) {
//     throw {
//       type: "not_found",
//       message: "folder not found"
//     }
//   }
//   return folder
// }