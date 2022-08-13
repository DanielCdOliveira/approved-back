import { prisma } from "../config/database.js";
import { CreateReviewData } from "../interfaces/interfaces.js"

export async function insertReviewDb(newReview: CreateReviewData) {
  try {
    await prisma.review.create({ data: newReview })
  } catch (error) {
    console.log(error);
    
  }
}