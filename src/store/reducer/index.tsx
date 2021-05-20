import {combineReducers} from "redux";
import {countryReducer} from "./countryReducere";
// import {tripsReducer} from "./tripsReducer";


export const rootReducer = combineReducers({
    country: countryReducer,
    // trips: tripsReducer
})

export type RootState = ReturnType<typeof rootReducer>