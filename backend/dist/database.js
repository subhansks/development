"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
exports.pool = promise_1.default.createPool({
    host: "c120755.sgvps.net",
    user: "u1epzzap1mfbe",
    password: "fi33mdg6g5vw",
    database: "db4jha6xobt6ug",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
