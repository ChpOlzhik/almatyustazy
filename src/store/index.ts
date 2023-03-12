import { applyMiddleware, combineReducers, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const rootReduces = combineReducers(reducers);
export const store = configureStore(rootReduces, applyMiddleware(thunk));
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
