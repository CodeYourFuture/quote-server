import { Request, Response } from 'express';
import quotes from '../../constants/quotes';
import _ from 'lodash';
import matchStrings from '../../utils/matchStrings';

export function getQuotes(_req:Request, res:Response):void {
    res.send(quotes);
}

export function getRandomQuote(_req:Request, res:Response):void {
    res.send(_.sample(quotes));
}

export function quoteSearch(req:Request, res:Response):void {
    const { term } = req.query;
    if (typeof term !== "string") {
        res.status(400).send("Query param 'term' has to be provided and of type string");
    }
    const searchResults = quotes.filter((quote) => matchStrings(term as string, quote.quote, quote.author));
    if (searchResults.length === 0) {
        res.status(404).send("No results found");
    }
    res.send(searchResults);
}