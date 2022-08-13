import { Router } from "express";

import verifyToken from "../middlewares/tokenVeryfier.js";
import schemaVerifier from "../middlewares/schemaVerifier.js";
import { reviewSchema } from "../schemas/joiSchemas.js";
import { createReview } from "../controllers/reviewController.js";

const reviewRouter = Router()

reviewRouter.post("/review", verifyToken, schemaVerifier(reviewSchema), createReview)

export default reviewRouter