import { Request, Response } from 'express';
import { WELCOME_TEXT } from '../../constants';

export function homePage(_req:Request, res:Response):void {
    res.send(WELCOME_TEXT);
}