import { Request, Response } from 'express';

export function routeNotFound(_req:Request, res:Response) {
    res.status(404).send('This route doesn\'t exist')
}