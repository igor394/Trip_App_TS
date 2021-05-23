import {StateData, DataAction, StateActionTypes, Pages} from "../../types/dataState";

const initialState: StateData = {
    media: false,
    page: 'Your trips'
}

export const stateReducer = (state = initialState, action: DataAction): StateData => {
    switch (action.type) {
        case StateActionTypes.MEDIA:
            return {media: false,  page: state.page}
        case StateActionTypes.MEDIA_IN:
            return {media: true,  page: state.page}
        case StateActionTypes.PAGE:
            return {media: state.media,  page: action.payload}
        default:
            return state
    }
}
export const isMedia = () => ({type: StateActionTypes.MEDIA_IN})
export const isNotMedia = () => ({type: StateActionTypes.MEDIA})
export const isPage = (params: Pages) => ({type: StateActionTypes.PAGE, payload: params})