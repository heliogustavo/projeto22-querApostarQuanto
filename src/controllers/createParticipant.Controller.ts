import { Request, Response } from 'express';
import { newParticipantService } from '../services/createParticipants.service';

export async function createParticipant(req: Request, res: Response) {
    const {name, balance} = req.body
        try{
            const newParticipant = await newParticipantService({name,balance})
            return res.status(201).json(newParticipant);
        } catch (err: unknown) {
            if (err instanceof Error) {
                res.status(500).send(err.message)
            } else {
                res.status(500).send('Ocorreu um erro inesperado')
            }
        }
}
/* catch (err) {
    res.status(500).send(err.message)
}
//'err' é do tipo 'desconhecido'.ts(18046)
 */