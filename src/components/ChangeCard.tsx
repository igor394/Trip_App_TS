import React, {FC, useState} from 'react'
import '../style/ChangeCard.scss'
import InputCountry from "./Inputs/InputCountry"
import InputDate from "./Inputs/InputDate"
import InputCompany from "./Inputs/InputCompany"
import InputCovid from "./Inputs/InputCovid"
import {postTrip} from "../utils/api";
import {fetchTrips} from "../store/actions/trips";
import {useDispatch} from "react-redux";
import {isPage} from "../store/reducer/stateReducer";


const ChangeCard: FC = () => {
    const [start, setStart] = useState<string>('')
    const [end, setEnd] = useState<string>('')
    const [company, setCompany] = useState<string>('')
    const [street, setStreet] = useState<string>('')
    const [streetNum, setStreetNum] = useState<string>('')
    const [city, setCity] = useState<string>('')
    const [country, setCountry] = useState<string>('')
    const [zip, setZip] = useState<string>('')
    const [covidDate, setCovidDate] = useState<string>('')
    const [covid, setCovid] = useState<boolean>(false)
    const dispatch = useDispatch();

    const clickHandler = () => {
        postTrip({
            start_date: start,
            end_date: end,
            company_name: company,
            address: {
                street: street + streetNum,
                city: city,
                country: country,
                zip: zip
            },
            covid: covid,
            covid_test_date: covidDate
        })
        dispatch(fetchTrips())
        dispatch(isPage('SIDEBAR'))
    }


    const handlerStart = (arg: string): void => {
        setStart(arg)
    }
    const handlerEnd = (arg: string): void => {
        setEnd(arg)
    }
    const handlerCountry = (arg: string): void => {
        setCountry(arg)
    }
    const handlerCompany = (arg: string): void => {
        setCompany(arg)
    }
    const handlerStreet = (arg: string): void => {
        setStreet(arg)
    }
    const handlerStreetNum = (arg: string): void => {
        setStreetNum(arg)
    }
    const handlerCity = (arg: string): void => {
        setCity(arg)
    }
    const handlerZip = (arg: string): void => {
        setZip(arg)
    }

    const handlerCovidDate = (arg: string): void => {
        if (arg !== '') {
            setCovid(true)
            setCovidDate(arg)
        } else {
            setCovid(false)
            setCovidDate('')
        }
    }

    return (
        <>
            <div className='input-collum-wrap'>
                <div className='input-collum'>
                    <InputCountry countryDefine={handlerCountry}/>
                    <InputDate start={handlerStart} end={handlerEnd}/>
                    <InputCompany company={handlerCompany} street={handlerStreet} streetNum={handlerStreetNum}
                                  city={handlerCity} zip={handlerZip}/>
                    <InputCovid covidDate={handlerCovidDate}/>
                </div>
            </div>
            <div className='border-bot'></div>
            <div className='btn_card_trip-wrap'>
                <div onClick={clickHandler} className='btn_card_trip'>
                    <span>Save</span>
                    <img src="/images/Check.svg" alt="logo" width={16} height={16}/>
                </div>
            </div>
        </>


    );
};

export default ChangeCard;