import express from 'express';
import matchStrings from '../utils/matchStrings';
import quotes from '../constants/quotes';
import _ from 'lodash';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send("Berkeli's Quote Server!  Ask me for api/quotes/random, or api/quotes");
})
router.get('/api', (_req, res) => {
    res.send("Berkeli's Quote Server!  Ask me for api/quotes/random, or api/quotes");
})
router.get('/api/quotes', (_req, res) => {
    res.send(quotes);
})
router.get('/api/quotes/random', (_req, res) => {
    res.send(_.sample(quotes));
})
router.get('/api/quotes/search', (req, res) => {
    const searchTerm = req.query.term as string;
    if (!searchTerm) {
        res.status(404).send("No search term provided");
    }
    const searchResults = quotes.filter((quote) => matchStrings(searchTerm, quote.quote, quote.author));
    if (searchResults.length === 0) {
        res.status(404).send("No results found");
    }
    res.send(searchResults);
})

export default router;