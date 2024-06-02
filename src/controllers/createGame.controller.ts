import { addGameService } from "../services/createGame.service";


export async function newGame (){
    const newGame = await addGameService()
}