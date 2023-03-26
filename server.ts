// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
require("dotenv").config();
import lodash from "lodash";
import cors from "cors";
import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import quotes from "./quotes.json";

const app = express();
app.use(cors());
//load the quotes JSON
type QuotesType = {
  quote: string;
  author: string;
};

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request: Request, response: Response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
app.get("/quotes", (req: Request, res: Response) => {
  res.send(quotes);
});
app.get("/quotes/random", (req: Request, res: Response) => {
  res.send(pickFromArray(quotes));
});

app.get("/quotes/search", (req: Request, res: Response) => {
  const searchTerm = req.query.term?.toString() ?? "";
  if (req.query.term) {
    const filtered = quotes.filter(({ quote, author }: QuotesType) => {
      return (
        quote.toLowerCase().includes(searchTerm.toString()) ||
        author.toLowerCase().includes(searchTerm.toString())
      );
    });
    res.send(filtered);
  }
});
//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr: QuotesType[]) {
  return lodash.sample(arr);
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT, () => {
  const { port } = listener.address() as AddressInfo;
  console.log("Your app is listening on port " + port);
});
