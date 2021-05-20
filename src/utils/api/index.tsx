import axios, {AxiosResponse} from 'axios'
const BASE_URL = 'https://task-devel.cleevio-vercel.vercel.app/api';
const instance = axios.create ({baseURL: BASE_URL, headers:{Authorization: 'Bearer bJNKCgd6egyWJtR5ThMy'}})

// const TRIP = '/trip';
const COUNTRY = '/country';



export const getCountry = async(): Promise<AxiosResponse> => {
    const result =  await instance.get(`${COUNTRY}`);
    return result.data;
}
//
// export const getTrips = () => axios.get(`${url}${trip}`);
//
// export const postTrip = (trip) => axios.post(`https://task-devel.cleevio-vercel.vercel.app/api/trip`, trip, config);
//
// export const deletetrip = (id) => axios.delete(`${url}${trip}/${id}`);
//
// export const getTripById = (id) => axios.get(`${url}${trip}/${id}`);
//
// export const putTrip = (id, trip) => axios.put(`${url}${trip}/${id}`, trip );