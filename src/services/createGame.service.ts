import { createGameDB } from "../repositories/createGame.repository";


export async function addGameService() {
    const addGame = await createGameDB() 
}