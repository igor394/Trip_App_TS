import {CountryAction, CountryActionTypes} from '../../types/country';
import {Dispatch} from 'redux';
import {getCountry} from '../../utils/api';

export const fetchCountries = () => {
    return async (dispatch: Dispatch<CountryAction>) => {
        try {
            dispatch({type: CountryActionTypes.FETCH_COUNTRY})
            const response = await getCountry()
            dispatch({type: CountryActionTypes.FETCH_COUNTRY_SUCCESS, payload: response.data})

        } catch (e) {
            dispatch({
                type: CountryActionTypes.FETCH_COUNTRY_ERROR,
                payload: 'An error occurred while loading country list'
            })
        }
    }
}