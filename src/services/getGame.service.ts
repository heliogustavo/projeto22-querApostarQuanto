import { getGameDB } from "../repositories/getGame.repository";


export async function getGameService() {
    const addGame = await getGameDB() 
}