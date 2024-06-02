import { Request, Response } from "express";
import { participantsListService } from "../services/getParticipants.service";
//por que está precisando de ../ ?? Antes funcionava sem nada na frente
export async function getParticipants (req:Request, res: Response): Promise<void>{
    try{
        const allParticipants = await participantsListService()
        res.status(200).json(allParticipants);
    }catch (err: unknown) {
        if (err instanceof Error) {
            res.status(500).send(err.message)
        } else {
            res.status(500).send('Ocorreu um erro inesperado')
        }
    }
}