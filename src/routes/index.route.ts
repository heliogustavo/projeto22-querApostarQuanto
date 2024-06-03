import {Router} from "express"
import { participantsRouter } from "./participant.routers"
import { createGameRouter } from "./game.routers"
import { betsRouter } from "./bets.routers"

const router = Router()

router.use(participantsRouter)
router.use(createGameRouter)
router.use(betsRouter)

export default router