import client from "../database/database"



export async function createGameDB({ homeTeamName, awayTeamName }: { homeTeamName: string, awayTeamName: string }) {
    const newGame = await client.game.create({
        data: {
            homeTeamName,
            awayTeamName,
            homeTeamScore: 0, 
            awayTeamScore: 0, 
            isFinished: false,
        }
    });

    return newGame;
}