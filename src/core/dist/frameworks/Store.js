"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var redux_1 = require("redux");
var redux_thunk_1 = require("redux-thunk");
var Combine_1 = require("../adapters/Combine");
exports.store = (0, redux_1.createStore)(Combine_1.default, (0, redux_1.applyMiddleware)(redux_thunk_1.default));
