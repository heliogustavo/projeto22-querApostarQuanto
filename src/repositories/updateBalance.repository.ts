import client from "../database/database";
import { UpdateParticipantBalanceInput } from "interfaces/participants.interface";


export async function updateParticipantBalanceDB(input: UpdateParticipantBalanceInput ) {
    const {participantId, amountBet} = input
    await client.participant.update({
        where: { id: participantId },
        data: {
            balance: {
                decrement: amountBet,
            },
        },
    });
    
}