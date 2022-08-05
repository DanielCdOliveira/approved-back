import { prisma } from "../config/database.js";
import { CreateFolderData } from "../interfaces/interfaces.js"

export async function insertFolderDb(newFolder: CreateFolderData) {
  try {
    await prisma.folder.create({ data: newFolder })
  } catch (error) {
    if (error.code === "P2002") {
      throw {
        type: "conflict",
        message: "folder already registered"
      }
    }
  }
}
export async function getAllFolders(userId: number) {
  return prisma.folder.findMany({ where: { userId } })
}
export async function getFolderById(id: number) {
  const folder = await prisma.folder.findFirst({ where: { id } })
  if (!folder) {
    throw {
      type: "not_found",
      message: "folder not found"
    }
  }
  return folder
}