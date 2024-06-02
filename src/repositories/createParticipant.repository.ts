import { Participant } from "@prisma/client";
import client from "../database/database";
import { CreateParticipantInput } from "interfaces/participants.interface";

export async function createParticipantDB({ name, balance }: CreateParticipantInput): Promise<Participant> {

    const newParticipant = await client.participant.create({
      data: {
        name: name,
        balance: balance 
      }
    });
  
    return newParticipant;
  }