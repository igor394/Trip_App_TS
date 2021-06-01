import {combineReducers} from 'redux';
import {countryReducer} from './countryReducer';
import {stateReducer} from './stateReducer'
import {tripsReducer} from './tripsReducer'

export const rootReducer = combineReducers({
    country: countryReducer,
    stateData: stateReducer,
    trips: tripsReducer
})

export type RootState = ReturnType<typeof rootReducer>