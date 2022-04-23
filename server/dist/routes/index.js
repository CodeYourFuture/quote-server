"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const matchStrings_1 = __importDefault(require("../utils/matchStrings"));
const quotes_1 = __importDefault(require("../constants/quotes"));
const lodash_1 = __importDefault(require("lodash"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send("Berkeli's Quote Server!  Ask me for api/quotes/random, or api/quotes");
});
router.get('/api', (_req, res) => {
    res.send("Berkeli's Quote Server!  Ask me for api/quotes/random, or api/quotes");
});
router.get('/api/quotes', (_req, res) => {
    res.send(quotes_1.default);
});
router.get('/api/quotes/random', (_req, res) => {
    res.send(lodash_1.default.sample(quotes_1.default));
});
router.get('/api/quotes/search', (req, res) => {
    const searchTerm = req.query.term;
    if (!searchTerm) {
        res.status(404).send("No search term provided");
    }
    const searchResults = quotes_1.default.filter((quote) => (0, matchStrings_1.default)(searchTerm, quote.quote, quote.author));
    if (searchResults.length === 0) {
        res.status(404).send("No results found");
    }
    res.send(searchResults);
});
exports.default = router;
//# sourceMappingURL=index.js.map