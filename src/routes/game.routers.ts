import { getGameById } from "../controllers/getGameByID.controller";
import { newGame } from "../controllers/createGame.controller";
import { Router } from "express";
import { getGamesList } from "../controllers/getAllGames.controller";
import { finishGame } from "../controllers/finishGame.controller";
import { validateSchema } from "../middlewares/validateSchema";
import { newGameSchema } from "../schemas/newGameSchema";

 export const createGameRouter = Router()

 createGameRouter.post("create-game",validateSchema(newGameSchema), newGame)
 createGameRouter.get("games-list", getGamesList)
 createGameRouter.get("game-details/:id", getGameById)
 createGameRouter.post("games/:id/finish", finishGame)

