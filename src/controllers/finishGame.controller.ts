import { Request, Response } from 'express';
import { toFinishGameService } from '../services/finishGame.service';
import { FinishGameRequestBody, GameParams } from 'interfaces/scoreGame.interface';
export async function finishGame(req: Request<GameParams, {}, FinishGameRequestBody>, res: Response) {
    
    const gameId = parseInt(req.params.id, 10);

    const { homeTeamScore, awayTeamScore } = req.body;

    if (isNaN(gameId)) {
      return res.status(400).send('Invalid game ID');
    }
    if (typeof homeTeamScore !== 'number' || typeof awayTeamScore !== 'number') {
        return res.status(400).send('Invalid scores');
      }

    try {
      const game = await toFinishGameService(gameId, homeTeamScore, awayTeamScore);
      res.status(200).json(game);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send('An unexpected error occurred');
      }
    }
  }