import axios, {AxiosResponse} from 'axios';
import ITripObject from '../interfaces/index';
const BASE_URL = 'https://task-devel.cleevio-vercel.vercel.app/api';
const instance = axios.create ({baseURL: BASE_URL, headers:{Authorization: 'Bearer tuJlyUkyUE0vHpwW5ZFg'}});

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
export const createTrip = async(params: ITripObject): Promise<AxiosResponse> => {
    const result =  await instance.post(`${TRIP}`,params);
    return result;
}
export const deleteTrip = async(params: string): Promise<AxiosResponse> => {
    const result =  await instance.delete(`${TRIP}/${params}`);
    return result;
}
export const changeTrip = async(id:string|undefined, trip:ITripObject): Promise<AxiosResponse> => {
    const result =  await instance.put(`${TRIP}/${id}`, trip);
    return result;
}