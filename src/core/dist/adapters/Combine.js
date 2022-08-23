"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var Reducer_1 = require("./Reducer");
var reducer = (0, redux_1.combineReducers)({
    reducer1: Reducer_1.reducer1
});
exports.default = reducer;
