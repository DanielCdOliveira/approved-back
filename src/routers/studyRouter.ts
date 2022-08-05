import { Router } from "express";

import verifyToken from "../middlewares/tokenVeryfier.js";

const studyRouter = Router()

studyRouter.post("/folder",verifyToken, )
studyRouter.get("/folder",verifyToken, )

export default studyRouter