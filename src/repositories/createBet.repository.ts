import { Bet } from '@prisma/client';
import client from '../database/database';
import { CreateBetInput } from 'interfaces/createBet.interface';

export async function createBetRepository(input: CreateBetInput): Promise<Bet> {
    const { homeTeamScore, awayTeamScore, amountBet, gameId, participantId } = input;

    const newBet = await client.bet.create({
        data: {
            homeTeamScore,
            awayTeamScore,
            amountBet,
            gameId,
            participantId,
            status: 'PENDING',
            amountWon: null,
        },
    });

    return newBet;
}
