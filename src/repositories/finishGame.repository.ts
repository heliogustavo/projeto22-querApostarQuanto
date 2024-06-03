import client from "../database/database";

export async function finishGameRepository(gameId: number, homeTeamScore: number, awayTeamScore: number) {
  const game = await client.game.update({
    where: { id: gameId },
    data: {
      isFinished: true,
      homeTeamScore: homeTeamScore,
      awayTeamScore: awayTeamScore,
    },
  });
  return game;
}

//eu poderia criar toda a chamada dentro do return, sem precisar arazenar numa variável, qual a diferença?
