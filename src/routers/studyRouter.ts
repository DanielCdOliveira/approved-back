import { Router } from "express";

import verifyToken from "../middlewares/tokenVeryfier.js";
import { createStudy } from "../controllers/studyController.js";
const studyRouter = Router()

studyRouter.post("/study",verifyToken, createStudy)

export default studyRouter