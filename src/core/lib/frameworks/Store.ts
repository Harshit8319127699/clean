import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../adapters/Combine";

export const store =createStore(reducer,applyMiddleware(thunk))

