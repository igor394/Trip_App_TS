import {combineReducers} from "redux";
import {countryReducer} from "./countryReducere";
import {stateReducer} from "./stateReducer"


export const rootReducer = combineReducers({
    country: countryReducer,
    stateData: stateReducer
    // trips: tripsReducer
})

export type RootState = ReturnType<typeof rootReducer>