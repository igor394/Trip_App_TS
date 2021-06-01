import {CountryAction, CountryActionTypes, CountryState} from '../../types/country';

const initialState: CountryState = {
    country: [],
    loading: false,
    error: null
}

export const countryReducer = (state = initialState, action: CountryAction): CountryState => {
    switch (action.type) {
        case CountryActionTypes.FETCH_COUNTRY:
            return {loading: true, error: null, country: []}
        case CountryActionTypes.FETCH_COUNTRY_SUCCESS:
            return {loading: false, error: null, country: action.payload}
        case CountryActionTypes.FETCH_COUNTRY_ERROR:
            return {loading: false, error: action.payload, country: []}
        default:
            return state
    }
}