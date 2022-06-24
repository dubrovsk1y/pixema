import { all, takeLatest, put, call } from "redux-saga/effects";
import { loadFilmsData, setFilmsList } from "../redux/reducers/filmReducer";
import { getFilmsListApi } from "./api";

function* getFilmsListSaga(action: any) {
  const { data, status } = yield call(getFilmsListApi, action.payload);
  if (status === 200) {
    yield put(setFilmsList(data.Search));
    yield console.log(data);
    yield console.log(status);
  }
}

export default function* filmsWatcher() {
  yield all([takeLatest(loadFilmsData, getFilmsListSaga)]);
}
