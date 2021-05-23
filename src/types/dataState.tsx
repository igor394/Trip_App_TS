export interface  StateData {
    media: boolean,
    page: string
}
export enum StateActionTypes {
    MEDIA = 'MEDIA',
    MEDIA_IN = 'MEDIA_IN',
    PAGE = 'PAGE',
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
interface PageActionTypesPage {
    type: StateActionTypes.PAGE;
    payload: Pages
}

export type DataAction = MediaActionTypes | PageActionTypesPage | MediaActionTypesIN