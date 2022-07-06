import { all, takeLatest, put, call } from "redux-saga/effects";
import { loadFilms, loadSearchFilms, setFilms, setMoreFilms, setSearchFilms } from "../redux/reducers/filmReducer";
import { getFilmsApi, searchApi } from "./api";

function* getSearchFilmsSaga(action: any) {
  const access_token = localStorage.getItem("access_token");
  const { query } = action.payload;
  const { data, status } = yield call(searchApi, access_token, query);
  if (status === 200) {
    yield put(setSearchFilms(data.results));
  }
}

function* getHomeFilmsSaga(action: any) {
  const access_token = localStorage.getItem("access_token");
  const { isLoadMoreFilms, page, type, genre, country, order } = action.payload;
  const { data, status } = yield call(getFilmsApi, access_token, page, type, genre, country, order);
  if (status === 200) {
    yield put(isLoadMoreFilms ? setMoreFilms(data.pagination.data) : setFilms(data.pagination.data));
  }
}

export default function* filmWatcher() {
  yield all([takeLatest(loadFilms, getHomeFilmsSaga)]);
  yield all([takeLatest(loadSearchFilms, getSearchFilmsSaga)]);
}
