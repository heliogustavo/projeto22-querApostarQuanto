import { getAllGamesDB } from "../repositories/getAllGames.repository";

export async function getAllGamesService() {
    const gamesList = await getAllGamesDB() 

    return gamesList
}