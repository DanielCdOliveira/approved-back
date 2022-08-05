import { Router } from "express";

import verifyToken from "../middlewares/tokenVeryfier.js";
import { createSubject } from "../controllers/subjectController.js";

const subjectRouter = Router()

subjectRouter.post("/subject",verifyToken, createSubject)

export default subjectRouter