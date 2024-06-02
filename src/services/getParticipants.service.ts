import { getParticipantsDB } from "../repositories/getParticipants.repository";


export async function participantsListService() {

    const allParticipants = await getParticipantsDB()

    return allParticipants;
}