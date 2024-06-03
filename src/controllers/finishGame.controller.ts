import { Request, Response } from 'express';
import { toFinishGameService } from 'services/finishGame.service';

export async function finishGame(req: Request, res: Response) {
    const gameId = parseInt(req.params.id, 10);
  
    if (isNaN(gameId)) {
      return res.status(400).send('Invalid game ID');
    }
  
    try {
      const game = await toFinishGameService(gameId);
      res.status(200).json(game);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send('An unexpected error occurred');
      }
    }
  }