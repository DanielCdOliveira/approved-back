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