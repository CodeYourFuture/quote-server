"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const quotes_1 = __importDefault(require("../constants/quotes"));
exports.default = (_, res) => {
    res.send(quotes_1.default);
};
//# sourceMappingURL=quotes.js.map