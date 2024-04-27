import { api } from "@/core/services/kpis.service";
import rootReducer from "@/core/reducers";
import { configureStore } from "@reduxjs/toolkit";

// const loggingMiddleware = (store) => (next) => (action) => {
//   console.log("Dispatched action:", action);
//   return next(action);
// };

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefault) => getDefault().concat(api.middleware),
});

export default store;
