import { getGameByIdService } from "../services/getGameById.service";
import { Request, Response } from 'express'; 

export async function getGameById(req: Request, res: Response) {
    const { id } = req.params;
    const gameId = parseInt(id, 10); 
    //devo passar o id como number ou string?
    try {
        const oneGame = await getGameByIdService(gameId);
        return res.status(201).json(oneGame);
    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(500).send(err.message);
        } else {
            res.status(500).send('Ocorreu um erro inesperado');
        }
    }
}
