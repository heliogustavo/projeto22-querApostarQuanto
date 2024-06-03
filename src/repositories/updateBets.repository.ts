import client from "../database/database";

export async function updateBetsDB({ betId, isWinner, amountWon }: { betId: number; isWinner: boolean; amountWon: number }) {
    // Converta a string de amountWon para um número antes de atribuí-la

    return client.bet.update({
        where: { id: betId },
        data: {
            status: isWinner ? 'WON' : 'LOST',
            amountWon: amountWon // Arredonda o valor para duas casas decimais
        },
    });
}
