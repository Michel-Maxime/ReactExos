import { call, all, put, takeLatest } from "redux-saga/effects";
import { add } from "../redux/moviesSlices";
import { AddFav } from "../redux/favoriteSlice";

async function httpClient(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

// worker Saga
export function* fetchMovies() {
  const movies = yield call(
    httpClient,
    `${process.env.REACT_APP_API_URL}movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
  );
  console.log("saga fetch films is call");
  yield put(add(movies));
}

export function* fetchFavorites() {
  const movies = yield call(
    httpClient,
    `${process.env.REACT_APP_API_URL}movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
  );
  console.log("saga fetch favorites is call");
  yield put(AddFav(movies));
}

// watcher Saga
export function* watchMovies() {
  yield takeLatest("FETCH_MOVIES", fetchMovies);
}

export function* watchFavorites() {
  yield takeLatest("FETCH_FAVORITES", fetchFavorites);
}

// root Saga
export function* rootSaga() {
  yield all([watchMovies(), watchFavorites()]);
}
