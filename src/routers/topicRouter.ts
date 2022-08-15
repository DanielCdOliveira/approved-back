import { Router } from "express";

import verifyToken from "../middlewares/tokenVeryfier.js";
import schemaVerifier from "../middlewares/schemaVerifier.js";
import { topicSchema } from "../schemas/joiSchemas.js";
import { createTopic,completeTopic,deleteTopic} from "../controllers/topicController.js";

const topicRouter = Router()

topicRouter.post("/topic", verifyToken,schemaVerifier(topicSchema), createTopic)
topicRouter.post("/topic/:id", verifyToken, completeTopic) 
topicRouter.delete("/topic/:id", verifyToken, deleteTopic)

export default topicRouter