import { combineReducers } from "redux";

import authReducer from "./AuthReducre";
import postReducer from "./PostReducer";

export const reducers = combineReducers({ authReducer, postReducer })