"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createServer_1 = __importDefault(require("./createServer"));
const app = (0, createServer_1.default)();
app.listen(process.env.PORT, function () {
    console.log(`App is running on http://localhost:${process.env.PORT}`);
});
//# sourceMappingURL=app.js.map