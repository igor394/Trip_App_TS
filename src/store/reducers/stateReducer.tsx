import {StateData, DataAction, StateActionTypes, Pages} from '../../types/dataState';

const initialState: StateData = {
    media: false,
    page: 'Your trips',
    idTrips: ''
}

export const stateReducer = (state = initialState, action: DataAction): StateData => {
    switch (action.type) {
        case StateActionTypes.MEDIA:
            return {media: false,  page: state.page, idTrips: state.idTrips}
        case StateActionTypes.MEDIA_IN:
            return {media: true,  page: state.page, idTrips: state.idTrips}
        case StateActionTypes.PAGE:
            return {media: state.media,  page: action.payload, idTrips: state.idTrips}
        case StateActionTypes.IN_ID:
            return {media: state.media,  page: state.page, idTrips:  action.payload,}
        case StateActionTypes.OUT_ID:
            return {media: state.media,  page: state.page, idTrips: ''}
        default:
            return state
    }
}
export const isMedia = () => ({type: StateActionTypes.MEDIA_IN})
export const isNotMedia = () => ({type: StateActionTypes.MEDIA})
export const isPage = (params: Pages) => ({type: StateActionTypes.PAGE, payload: params})
export const isIdTrip = (params: string) => ({type: StateActionTypes.IN_ID, payload: params})
export const outIdTrip = () => ({type: StateActionTypes.OUT_ID})