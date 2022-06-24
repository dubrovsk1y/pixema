import { all } from "redux-saga/effects";
import filmsWatcher from "./filmSaga";

export default function* rootSaga() {
  yield all([filmsWatcher()]);
}
