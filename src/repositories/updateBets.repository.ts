import client from "../database/database";

export async function updateBetsDB({ betId, isWinner, amountWon }: { betId: number; isWinner: boolean; amountWon: number }) {
    return client.bet.update({
        where: { id: betId },
        data: {
            status: isWinner ? 'WON' : 'LOST',
            amountWon: isWinner ? amountWon : null
        },
    });
}
