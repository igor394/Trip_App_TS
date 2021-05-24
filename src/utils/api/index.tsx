import axios, {AxiosResponse} from 'axios'
const BASE_URL = 'https://task-devel.cleevio-vercel.vercel.app/api'
const instance = axios.create ({baseURL: BASE_URL, headers:{Authorization: 'Bearer tuJlyUkyUE0vHpwW5ZFg'}})

const TRIP = '/trip';
const COUNTRY = '/country';



export const getCountry = async(): Promise<AxiosResponse> => {
    const result =  await instance.get(`${COUNTRY}`);
    return result;
}
export const getTrips = async(): Promise<AxiosResponse> => {
    const result =  await instance.get(`${TRIP}`);
    return result;
}
export const postTrip = async(params: any): Promise<AxiosResponse> => {
    const result =  await instance.post(`${TRIP}`,params);
    return result;
}
// export const deletetrip = async(params): Promise<AxiosResponse> => {
//     const result =  await instance.delete(`${TRIP}/${params}`);
//     return result;
// }
// export const getTripById = async(params): Promise<AxiosResponse> => {
//     const result =  await instance.get(`${TRIP}/${params}`);
//     return result;
// }
// export const putTrip = async(id, trip): Promise<AxiosResponse> => {
//     const result =  await instance.put(`${TRIP}/${id}`, trip);
//     return result;
// }