"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = __importDefault(require("./routes/users"));
const root_1 = __importDefault(require("./routes/root"));
const router = (0, express_1.Router)();
router.use('/users', users_1.default);
router.use('', root_1.default);
router.use((req, res, next) => {
    res.status(404).send("Sorry, that route doesn't exist.");
});
exports.default = router;
