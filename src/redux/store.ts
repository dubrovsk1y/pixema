import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/rootSaga";
import filmReducer from "./reducers/filmReducer";
import filterReducer from "./reducers/filterReducer";
import tabReducer from "./reducers/tabReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  tab: tabReducer,
  film: filmReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
