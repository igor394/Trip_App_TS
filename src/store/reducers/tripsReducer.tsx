import {TripsAction, TripsActionTypes, TripsState} from "../../types/trips";

const initialState: TripsState = {
    trips: [],
    loading: false,
    error: null
}

export const tripsReducer = (state = initialState, action: TripsAction): TripsState => {
    switch (action.type) {
        case TripsActionTypes.FETCH_TRIPS:
            return {loading: true, error: null, trips: []}
        case TripsActionTypes.FETCH_TRIPS_SUCCESS:
            return {loading: false, error: null, trips: action.payload}
        case TripsActionTypes.FETCH_TRIPS_ERROR:
            return {loading: false, error: action.payload, trips: []}
        default:
            return state
    }
}