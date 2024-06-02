import { getGameService } from "../services/getGame.service";

export async function getGamesList() {
    const oneGame = await getGameService()
}