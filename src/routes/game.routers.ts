import { getGameById } from "../controllers/getGameByID.controller";
import { newGame } from "../controllers/createGame.controller";
import { Router } from "express";
import { getGamesList } from "../controllers/getAllGames.controller";
import { finishGame } from "../controllers/finishGame.controller";

 export const createGameRouter = Router()

 createGameRouter.post("create-game", newGame)
 createGameRouter.get("games-list", getGamesList)
 createGameRouter.get("game-details/:id", getGameById)
 createGameRouter.post("games/:id/finish", finishGame)

