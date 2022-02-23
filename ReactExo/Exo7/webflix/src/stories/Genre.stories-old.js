// Button.stories.js|jsx
import Carde from "../components/Card";

import React from "react";

import { Button } from "./Button";
import ReactDOM from "react-dom";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

import favoriteSlice from "../redux/favoriteSlice";
import moviesSlice from "../redux/moviesSlices";
import { Provider } from "react-redux";

import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../saga/saga";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    favorites: favoriteSlice,
    movies: moviesSlice,
  })
);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

let persistor = persistStore(store);

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Carde",
  component: Carde,
};

export const Primary = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Carde
                title={"Titre"}
                id={""}
                img={""}
                details={"loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
