"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.quoteSearch = exports.getRandomQuote = exports.getQuotes = void 0;
const quotes_1 = __importDefault(require("../../constants/quotes"));
const lodash_1 = __importDefault(require("lodash"));
const matchStrings_1 = __importDefault(require("../../utils/matchStrings"));
function getQuotes(_req, res) {
    res.send(quotes_1.default);
}
exports.getQuotes = getQuotes;
function getRandomQuote(_req, res) {
    res.send(lodash_1.default.sample(quotes_1.default));
}
exports.getRandomQuote = getRandomQuote;
function quoteSearch(req, res) {
    const { term } = req.query;
    if (typeof term !== "string") {
        throw new Error("Query param 'term' has to be of type string");
    }
    if (!term) {
        res.status(404).send("No search term provided");
    }
    const searchResults = quotes_1.default.filter((quote) => (0, matchStrings_1.default)(term, quote.quote, quote.author));
    if (searchResults.length === 0) {
        res.status(404).send("No results found");
    }
    res.send(searchResults);
}
exports.quoteSearch = quoteSearch;
//# sourceMappingURL=quotes.js.map