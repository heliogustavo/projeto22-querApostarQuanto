import { Participant } from "@prisma/client";
import client from "../database/database"; // Ajuste o caminho conforme necessário

export async function getParticipantsDB(): Promise<Participant[]> {
    try {
        const allParticipants = await client.participant.findMany();
        return allParticipants;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(`Erro ao buscar participantes: ${error.message}`);
        } else {
            throw new Error('Erro desconhecido ao buscar participantes');
        }
    }
}

