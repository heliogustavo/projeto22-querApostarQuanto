import { Request, Response } from 'express';
import { addGameService } from "../services/createGame.service";

export async function newGame(req: Request, res: Response) {
    const { homeTeamName, awayTeamName } = req.body;
  try {
    if (!homeTeamName || !awayTeamName) {
      return res.status(400).json({ error: 'Both homeTeamName and awayTeamName are required' });
    }

    const newGame = await addGameService({homeTeamName, awayTeamName}); //com ou sem {}?

    return res.status(201).json(newGame);
    
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
