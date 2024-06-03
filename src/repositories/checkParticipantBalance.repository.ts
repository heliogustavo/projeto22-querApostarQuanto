import client from "../database/database";


export async function checkParticipantBalanceDB(participantId: number) {
    const participantData = await client.participant.findUnique({
        where: { id: participantId },
    });
    return participantData
}