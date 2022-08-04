import { Router } from "express";

import schemaVerifier from "../middlewares/schemaVerifier.js";
import { signinSchema,signupSchema } from "../schemas/joiSchemas.js";
import { signIn, signUp } from "../controllers/userController.js";

const userRouter = Router()

userRouter.post("/signin",schemaVerifier(signinSchema) ,signIn)
userRouter.post("/signup",schemaVerifier(signupSchema) ,signUp)

export default userRouter