import { Router } from "express";

import { signIn, signUp } from "../controllers/authController.js";

const authRouter = Router()

authRouter.post("/login",signIn)
authRouter.post("/signup",signUp)

export default authRouter