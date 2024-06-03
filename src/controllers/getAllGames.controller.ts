import { Request, Response } from 'express'; 
import { getAllGamesService } from '../services/getAllGames.service';

export async function getGamesList(req: Request, res: Response) {
    try {
        const allGames = await getAllGamesService();
        return res.status(201).json(allGames);
    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(500).send(err.message);
        } else {
            res.status(500).send('Ocorreu um erro inesperado');
        }
    }
}
