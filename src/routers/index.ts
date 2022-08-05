import {Router} from 'express';
import userRouter from './userRouter.js';
import folderRouter from './folderRouter.js';
const router = Router();

router.use(userRouter)
router.use(folderRouter)


export default router;