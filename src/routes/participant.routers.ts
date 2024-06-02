import { createParticipant } from "../controllers/createParticipant.Controller"
import { getParticipants } from "../controllers/getParticipants.controller"
import {Router} from "express"
import { validateSchema } from "../middlewares/validateSchema"
import { participantSchema } from "../schemas/participantSchema"

export const participantsRouter = Router()

participantsRouter.post("/participants",validateSchema(participantSchema), createParticipant)
participantsRouter.get("/participants", getParticipants)