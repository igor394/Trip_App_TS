export  interface IAddress {
    street: string,
    street_num: string,
    city: string,
    country: string,
    zip: string
}
export default interface ITripObject {
    start_date: string,
    end_date: string,
    company_name: string,
    address: IAddress,
    covid: boolean,
    covid_test_date: string
}