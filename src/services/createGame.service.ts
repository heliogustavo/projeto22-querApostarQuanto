import { createGameDB } from "../repositories/createGame.repository";


export async function addGameService({homeTeamName, awayTeamName}: {homeTeamName:string, awayTeamName:string}) {

    const addGame = await createGameDB({homeTeamName, awayTeamName}) 

    return addGame;
}