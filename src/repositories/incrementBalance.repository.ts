import client from "../database/database";

export async function incrementParticipantBalanceDB(betParticipantId: number, amountWon: number): Promise<void> {
    await client.participant.update({
        where: { id: betParticipantId },
        data: {
            balance: {
                increment: amountWon,
            },
        },
    });
}
