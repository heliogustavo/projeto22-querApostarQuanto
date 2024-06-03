import { Request, Response } from 'express';
import { createBetService } from '../services/createBet.service';

export async function createBetController(req: Request, res: Response): Promise<void> {
    try {
        const { homeTeamScore, awayTeamScore, amountBet, gameId, participantId } = req.body;

        const bet = await createBetService({ homeTeamScore, awayTeamScore, amountBet, gameId, participantId });

        res.status(201).json(bet);
    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(500).send(err.message)
        } else {
            res.status(500).send('Ocorreu um erro inesperado')
        }
    }
}
