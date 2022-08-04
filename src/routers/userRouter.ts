import { Router } from "express";

import { signIn, signUp } from "../controllers/userController.js";

const userRouter = Router()

userRouter.post("/signin", signIn)
userRouter.post("/signup", signUp)

export default userRouter