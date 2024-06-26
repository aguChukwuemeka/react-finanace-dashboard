import { combineReducers } from "@reduxjs/toolkit";
import { api } from "../services/kpis.service";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});

export default rootReducer;
