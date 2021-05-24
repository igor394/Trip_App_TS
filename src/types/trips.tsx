export interface TripsState {
    trips: any[];
    loading: boolean,
    error: null | string
}
export enum TripsActionTypes {
    FETCH_TRIPS = 'FETCH_TRIPS',
    FETCH_TRIPS_SUCCESS = 'FETCH_TRIPS_SUCCESS',
    FETCH_TRIPS_ERROR = 'FETCH_TRIPS_FETCH_TRIPS_ERROR',
}
interface FetchTripsAction {
    type: TripsActionTypes.FETCH_TRIPS;
}
interface FetchTripsSuccessAction {
    type: TripsActionTypes.FETCH_TRIPS_SUCCESS;
    payload: any[]
}
interface FetchTripsErrorAction {
    type: TripsActionTypes.FETCH_TRIPS_ERROR;
    payload: string;
}
export type TripsAction = FetchTripsAction | FetchTripsErrorAction | FetchTripsSuccessAction