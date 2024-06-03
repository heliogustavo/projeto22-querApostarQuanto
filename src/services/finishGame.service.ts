import client from "database/database";
import { finishGameRepository } from "repositories/finishGame.repository";
import { upDateBetsDB } from "repositories/upDateBets.repository";


export async function toFinishGameService(gameId: number) {
    const finishGame = await finishGameRepository(gameId)
    const game = await upDateBetsDB(gameId)
    if (!game || !game.isFinished) {
        throw new Error('Game not found or not finished')
    }

    const updatedBets = game.bets.map(async bet => {
        let status = 'LOST'
        if (bet.homeTeamScore === game.homeTeamScore && bet.awayTeamScore === game.awayTeamScore) {
            status = 'WON'
        }
        return client.bet.update({
            where: { id: bet.id },
            data: { status, amountWon: status === 'WON' ? bet.amountBet * 2 : null },
        })
    })

    await Promise.all(updatedBets)
    //perguntar se esse método é recomendado pra essa abordagem
}
