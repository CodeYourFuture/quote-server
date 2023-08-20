import express from 'express'
import {
  getAllQuotes,
  getRandomQuote,
  getSearchedQuote,
} from '../contorllers/quotes'
const router = express.Router()

router.route('/').get(getAllQuotes)
router.route('/random').get(getRandomQuote)
router.route('/search').get(getSearchedQuote)

export default router
