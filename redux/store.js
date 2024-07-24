import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import { locationReducer } from "../slices/locationReducer";
import { apartmentReducer } from "../slices/apartmentReducer";
import { sliderReducer } from "../slices/sliderReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga/rootSaga";
import { getApartMentReducer } from "@/slices/getApartMentReducer";



// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const allReducers = combineReducers({
        location:locationReducer,
        slider:sliderReducer,
        apartment:apartmentReducer,
        getApartMentReducer
})



export const store = createStore(allReducers, compose(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga);







