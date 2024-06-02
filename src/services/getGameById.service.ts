import { getGameByIdDB } from "repositories/getGameById.repository ";


export async function getGameByIdService() {
    const addGame = await getGameByIdDB() 
}