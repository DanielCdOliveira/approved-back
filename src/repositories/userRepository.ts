import {prisma} from "../config/database.js";
import {CreateUserData} from "../interfaces/interfaces.js"

export async function insertUserDb(user : CreateUserData) {
  try {
    await prisma.user.create({data:user})
  } catch (error) {
    if (error.code === "P2002"){
      throw{
        type:"conflict",
        message:"email already registered"
      }
    }
  }
}
export async function verifyUser(email) {
//   return connection.query(
//     `
//     SELECT * FROM users
//     WHERE email = $1
//     `,
//     [email]
//   );
}
export async function createSession(userId) {
//   return connection.query(
//     `
// INSERT INTO sessions
// ("userId") 
// VALUES ($1)
// RETURNING id
// `,
//     [userId]
//   );
}