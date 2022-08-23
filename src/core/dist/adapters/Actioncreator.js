"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getnews1 = void 0;
var Actions_1 = require("../usecases/Actions");
var getnews1 = function (data) {
    return {
        type: Actions_1.Actions.getnews,
        payload: data
    };
};
exports.getnews1 = getnews1;
