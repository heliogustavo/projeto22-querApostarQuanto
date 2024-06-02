import {Router} from "express"
import { participantsRouter } from "./participant.routers"
import { createGameRouter } from "./game.routers"

const router = Router()

router.use(participantsRouter)
router.use(createGameRouter)

export default router