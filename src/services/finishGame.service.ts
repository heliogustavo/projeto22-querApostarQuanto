import { finishGameRepository } from "../repositories/finishGame.repository";
import { findBetsByGameId } from "../repositories/findBetsByGameId.repository";
import { updateBetsDB } from "../repositories/updateBets.repository";
export async function toFinishGameService(gameId: number, homeTeamScore: number, awayTeamScore: number) {
    const gameFinished = await finishGameRepository(gameId, homeTeamScore, awayTeamScore);

    const game = await findBetsByGameId(gameId);

    if (!game || !game.isFinished) {
        throw new Error('Game not found or not finished');
    }

    const totalAmountBet = game.bets.reduce((acc, curr) => acc + curr.amountBet, 0);

    const totalAmountWon = game.bets
        .filter(bet => bet.homeTeamScore === homeTeamScore && bet.awayTeamScore === awayTeamScore)
        .reduce((acc, curr) => acc + curr.amountBet, 0);//preciso entender esse trecho

    const houseFee = 0.3;
    const updatedBets = game.bets.map(async (bet) => {
        //isWinner será true ou false
        const isWinner = bet.homeTeamScore === homeTeamScore && bet.awayTeamScore === awayTeamScore;

        const amountWon = isWinner ? ((bet.amountBet / totalAmountWon) * totalAmountBet * (1 - houseFee)) : 0;

        const betId = bet.id

        await updateBetsDB({betId, isWinner, amountWon})
        
    });

    await Promise.all(updatedBets);

    return gameFinished;
}
