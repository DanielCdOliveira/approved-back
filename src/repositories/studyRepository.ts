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