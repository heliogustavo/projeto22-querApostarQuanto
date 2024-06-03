import client from "../database/database"


export async function findBetsByGameId(gameId: number){
    const game = await client.game.findUnique({
        where: { id: gameId },
        include: { bets: true },
      })
      return game
}