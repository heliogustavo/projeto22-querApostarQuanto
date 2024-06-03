import { Participant } from "@prisma/client";

export interface CreateParticipantInput extends Pick<Participant, "name"|"balance">{}

export interface UpdateParticipantBalanceInput {
    participantId: number;
    amountBet: number;
}
