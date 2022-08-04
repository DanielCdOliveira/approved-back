import { prisma } from "../config/database.js";
import { CreateUserData } from "../interfaces/interfaces.js"

export async function insertUserDb(user: CreateUserData) {
  try {
    await prisma.user.create({ data: user })
  } catch (error) {
    if (error.code === "P2002") {
      throw {
        type: "conflict",
        message: "email already registered"
      }
    }
  }
}
export async function getUserByEmail(email: string) {
  return prisma.user.findFirst({ where: { email } })
}