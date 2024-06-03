import { Bet } from '@prisma/client';
import { createBetRepository } from '../repositories/createBet.repository';
import { CreateBetInput } from 'interfaces/createBet.interface';
import client from '../database/database';
import { checkParticipantBalanceDB } from '../repositories/checkParticipantBalance.repository';
import { updateParticipantBalanceDB } from '../repositories/updateBalance.repository';


export async function createBetService(input: CreateBetInput): Promise<Bet> {
    const { homeTeamScore, awayTeamScore, amountBet, gameId, participantId } = input;

    const game = await client.game.findUnique({
        where: { id: gameId },
    });

    if (!game) {
        throw new Error('Game not found');
    }
    if (game.isFinished) {
        throw new Error('It is not possible to bet on a finished game');
    }

    const participant = await checkParticipantBalanceDB(participantId)

    if (!participant) {
        throw new Error('Participant not found');
    }
    if (participant.balance < amountBet) {
        throw new Error('Insufficient balance');
    }

    await updateParticipantBalanceDB({participantId, amountBet})

    const newBet = await createBetRepository(input)
    return newBet;
}