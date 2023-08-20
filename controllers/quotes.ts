import { Request, Response } from 'express'
import type { QuotesType } from '../utils/types'
import lodash from 'lodash'
import quotes from '../quotes-with-id.json'

//load the quotes JSON

//START OF YOUR CODE...
export const getAllQuotes = (req: Request, res: Response) => {
  res.send(quotes)
}
export const getRandomQuote = (req: Request, res: Response) => {
  res.send(pickFromArray(quotes))
}

export const getSearchedQuote = (req: Request, res: Response) => {
  const searchTerm = req.query.term?.toString() ?? ''
  if (req.query.term) {
    const filtered = quotes.filter(({ quote, author }: QuotesType) => {
      return (
        quote.toLowerCase().includes(searchTerm.toString()) ||
        author.toLowerCase().includes(searchTerm.toString())
      )
    })
    res.send(filtered)
  }
}
//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr: QuotesType[]) {
  return lodash.sample(arr)
}
