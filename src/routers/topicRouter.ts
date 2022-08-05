import { Router } from "express";

import verifyToken from "../middlewares/tokenVeryfier.js";
import { createTopic } from "../controllers/topicController.js";

const topicRouter = Router()

topicRouter.post("/topic", verifyToken, createTopic)

export default topicRouter