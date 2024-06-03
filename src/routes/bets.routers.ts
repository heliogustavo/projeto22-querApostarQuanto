import { validateSchema } from "../middlewares/validateSchema";
import { createBetController } from "../controllers/createBet.controller";
import { Router } from "express";
import { betSchema } from "../schemas/betSchema";


export const betsRouter = Router()

betsRouter.post("/create-bet",validateSchema(betSchema), createBetController)