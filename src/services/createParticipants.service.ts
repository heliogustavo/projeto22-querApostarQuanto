import { Participant } from "@prisma/client";
import { CreateParticipantInput } from "interfaces/participants.interface";
import { createParticipantDB } from "../repositories/createParticipant.repository";

export async function newParticipantService({ name, balance }: CreateParticipantInput): Promise<Participant> {
    const numericBalance = typeof balance === 'string' ? parseInt(balance, 10) : balance;
    
    const newParticipant = await createParticipantDB({name,balance: numericBalance})
    
    return newParticipant;
}



