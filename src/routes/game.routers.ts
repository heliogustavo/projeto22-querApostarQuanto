import { getGameById } from "controllers/getGameByID.controller";
import { newGame } from "../controllers/createGame.controller";
import { Router } from "express";
import { getGamesList } from "controllers/getGames.controller";

 export const createGameRouter = Router()

 createGameRouter.post("create-game", newGame)
 createGameRouter.post("games-list", getGamesList)
 createGameRouter.get("game-details/:id", getGameById)
 createGameRouter.get("games/:id/finish", finishGame)
