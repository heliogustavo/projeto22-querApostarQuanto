import { findBetsByGameId } from "../repositories/findBetsByGameId.repository";


export async function getGameByIdService(gameId:number) {
    const oneGameWithBets = await findBetsByGameId(gameId) 

    return oneGameWithBets
}