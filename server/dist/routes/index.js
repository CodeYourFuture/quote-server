"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resolvers_1 = require("./resolvers");
const router = express_1.default.Router();
router.get('/', resolvers_1.homePage);
router.get('/api/v1/', resolvers_1.homePage);
router.get('/api/v1/quotes', resolvers_1.getQuotes);
router.get('/api/v1/quotes/random', resolvers_1.getRandomQuote);
router.get('/api/v1/quotes/search', resolvers_1.quoteSearch);
router.get('*', resolvers_1.routeNotFound);
exports.default = router;
//# sourceMappingURL=index.js.map