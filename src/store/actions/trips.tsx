import {TripsAction, TripsActionTypes} from '../../types/trips';
import {Dispatch} from 'redux';
import {getTrips} from '../../utils/api';

export const fetchTrips = () => {
    return async (dispatch: Dispatch<TripsAction>) => {
        try {
            dispatch({type: TripsActionTypes.FETCH_TRIPS})
            const response = await getTrips()
            dispatch({type: TripsActionTypes.FETCH_TRIPS_SUCCESS, payload: response.data})

        } catch (e) {
            dispatch({
                type: TripsActionTypes.FETCH_TRIPS_ERROR,
                payload: 'An error occurred while loading trips list'
            })
        }
    }
}