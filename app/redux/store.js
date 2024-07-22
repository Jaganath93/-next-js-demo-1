import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import { locationReducer } from "../slices/locationReducer";
import { apartmentReducer } from "../slices/apartmentReducer";
import { sliderReducer } from "../slices/sliderReducer";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const allReducers = combineReducers({
        location:locationReducer,
        slider:sliderReducer,
        apartment:apartmentReducer
})



export const store = createStore(allReducers, composeEnhancers(
    applyMiddleware()
));







