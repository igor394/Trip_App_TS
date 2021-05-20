
export interface CountryState {
    country: any[];
    loading: boolean;
    error: null | string;
}
export enum CountryActionTypes {
    FETCH_COUNTRY = 'FETCH_COUNTRY',
    FETCH_COUNTRY_SUCCESS = 'FETCH_COUNTRY_SUCCESS',
    FETCH_COUNTRY_ERROR = 'FETCH_COUNTRY_FETCH_COUNTRY_ERROR',
}
interface FetchCountryAction {
    type: CountryActionTypes.FETCH_COUNTRY;
}
interface FetchCountrySuccessAction {
    type: CountryActionTypes.FETCH_COUNTRY_SUCCESS;
    payload: any[]
}
interface FetchCountryErrorAction {
    type: CountryActionTypes.FETCH_COUNTRY_ERROR;
    payload: string;
}
export type CountryAction = FetchCountryAction | FetchCountryErrorAction | FetchCountrySuccessAction