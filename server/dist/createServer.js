"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
function default_1() {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use("/", routes_1.default);
    return app;
}
exports.default = default_1;
//# sourceMappingURL=createServer.js.map