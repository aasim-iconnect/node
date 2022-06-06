import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userSliceReducer from "./UserSlice";
import mySaga from "./Saga";

const saga = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        user: userSliceReducer,
    },
    middleware: [saga],
});

saga.run(mySaga);
