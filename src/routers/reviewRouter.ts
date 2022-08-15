import { Router } from "express";

import verifyToken from "../middlewares/tokenVeryfier.js";
import schemaVerifier from "../middlewares/schemaVerifier.js";
import { reviewSchema } from "../schemas/joiSchemas.js";
import { createReview, getAllReviewsFromUser,deleteReview } from "../controllers/reviewController.js";

const reviewRouter = Router()

reviewRouter.post("/review", verifyToken, schemaVerifier(reviewSchema), createReview)
reviewRouter.get("/review", verifyToken, getAllReviewsFromUser)
reviewRouter.delete("/review/:id", verifyToken, deleteReview)

export default reviewRouter