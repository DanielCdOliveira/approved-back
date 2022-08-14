import { CreateReviewData } from "../interfaces/interfaces.js"
import * as reviewRepository from "../repositories/reviewRepository.js"

export async function insertReviewDb(newReview: CreateReviewData) {
    await reviewRepository.insertReviewDb(newReview)
}
export async function getAllReviews(userId: number) {
   return await reviewRepository.GetAllReviews(userId)
}