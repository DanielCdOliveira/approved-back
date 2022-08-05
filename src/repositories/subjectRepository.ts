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