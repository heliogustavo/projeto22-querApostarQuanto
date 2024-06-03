import client from "database/database";


export async function finishGameRepository(gameId: number) {
    const game = await client.game.update({
      where: { id: gameId },
      data: { isFinished: true },
    });
    return game;
  }