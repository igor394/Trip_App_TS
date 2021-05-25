export interface  StateData {
    media: boolean,
    page: string,
    idTrips: string
}
export enum StateActionTypes {
    MEDIA = 'MEDIA',
    MEDIA_IN = 'MEDIA_IN',
    PAGE = 'PAGE',
    IN_ID = 'IN_ID',
    OUT_ID = 'OUT_ID'
}
export type Pages = 'Your trips' | 'View trip' | 'New trip' | 'Edit trip' | 'SIDEBAR'

interface MediaActionTypes {
    type: StateActionTypes.MEDIA;
    payload: boolean
}
interface MediaActionTypesIN {
    type: StateActionTypes.MEDIA_IN;
    payload: boolean
}
interface PageActionTypes {
    type: StateActionTypes.PAGE;
    payload: Pages
}
interface IdActionTypes {
    type: StateActionTypes.IN_ID;
    payload: string
}
interface IdOutActionTypes {
    type: StateActionTypes.OUT_ID;
    payload: string
}

export type DataAction = MediaActionTypes | PageActionTypes | MediaActionTypesIN | IdActionTypes | IdOutActionTypes