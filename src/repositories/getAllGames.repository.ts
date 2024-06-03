import client from "../database/database";

export async function getAllGamesDB() {
    const allGames = await client.game.findMany()
    
    return allGames
}