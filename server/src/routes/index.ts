import express from 'express';
import { homePage, routeNotFound, getQuotes, getRandomQuote, quoteSearch } from './resolvers';

const router = express.Router();

router.get('/', homePage);
router.get('/api/v1/', homePage);
router.get('/api/v1/quotes', getQuotes);
router.get('/api/v1/quotes/random', getRandomQuote);
router.get('/api/v1/quotes/search', quoteSearch);
router.get('*', routeNotFound);

export default router;