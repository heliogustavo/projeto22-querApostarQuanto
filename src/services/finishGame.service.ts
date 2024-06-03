import { finishGameRepository } from "../repositories/finishGame.repository";
import { findBetsByGameId } from "../repositories/findBetsByGameId.repository";
import { updateBetsDB } from "../repositories/updateBets.repository";
import { incrementParticipantBalanceDB } from "../repositories/incrementBalance.repository";

export async function toFinishGameService(gameId: number, homeTeamScore: number, awayTeamScore: number) {
    // Primeiro, busque o jogo pelo ID e verifique se ele foi encontrado
    const game = await findBetsByGameId(gameId);

    if (!game) {
        throw new Error('Game not found');
    }

    if (game.isFinished) {
        throw new Error('This game has already been finished');
    }

    // Calcular o total apostado
    const totalAmountBet = game.bets.reduce((acc, curr) => acc + curr.amountBet, 0);

    // Filtrar as apostas vencedoras e calcular o total apostado nelas
    const totalAmountWon = game.bets
        .filter(bet => bet.homeTeamScore === homeTeamScore && bet.awayTeamScore === awayTeamScore)
        .reduce((acc, curr) => acc + curr.amountBet, 0);

    // Taxa da casa
    const houseFee = 0.3;

    // Atualizar todas as apostas
    const updatedBets = game.bets.map(async (bet) => {
        const isWinner = bet.homeTeamScore === homeTeamScore && bet.awayTeamScore === awayTeamScore;

        const amountWon = isWinner ? ((bet.amountBet / totalAmountWon) * totalAmountBet * (1 - houseFee)) : 0;

        await updateBetsDB({ betId: bet.id, isWinner, amountWon });

        if (isWinner) {
            await incrementParticipantBalanceDB(bet.participantId, amountWon);
        }
    });

    // Esperar que todas as apostas sejam atualizadas
    await Promise.all(updatedBets);

    // Marcar o jogo como finalizado
    const gameFinished = await finishGameRepository(gameId, homeTeamScore, awayTeamScore);

    return gameFinished;
}
