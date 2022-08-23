"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer1 = void 0;
var Actions_1 = require("../usecases/Actions");
var initstate = [];
var reducer1 = function (state, action) {
    if (state === void 0) { state = initstate; }
    switch (action.type) {
        case Actions_1.Actions.getnews:
            return __assign(__assign({}, state), { payload: action.payload, loading: false });
        default:
            return {
                state: state,
                loading: true
            };
    }
};
exports.reducer1 = reducer1;
