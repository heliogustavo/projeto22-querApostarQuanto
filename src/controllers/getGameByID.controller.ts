import { getGameByIdService } from "services/getGameById.service";

export async function getGameById() {
    const oneGame = await getGameByIdService()
}