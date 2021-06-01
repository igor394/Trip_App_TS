import React, {FC, useState, useCallback, useEffect} from 'react';
import '../styles/ChangeCard.scss';
import InputCountry from './Inputs/InputCountry';
import InputDate from './Inputs/InputDate';
import InputCompany from './Inputs/InputCompany';
import InputCovid from './Inputs/InputCovid';
import {createTrip, changeTrip} from '../utils/api';
import {fetchTrips} from '../store/actions/trips';
import {useDispatch} from 'react-redux';
import {isPage, outIdTrip} from '../store/reducers/stateReducer';
import {useTypedSelector} from '../store/hooks/useTypeSelector';
import ITripObject from '../utils/interfaces/index';
import 'react-datepicker/dist/react-datepicker';


const ChangeCard: FC = () => {
        const {idTrips, page} = useTypedSelector(state => state.stateData);
        const {trips} = useTypedSelector(state => state.trips);
        const [start, setStart] = useState<string>('');
        const [end, setEnd] = useState<string>('');
        const [company, setCompany] = useState<string>('');
        const [street, setStreet] = useState<string>('');
        const [streetNum, setStreetNum] = useState<string>('');
        const [city, setCity] = useState<string>('');
        const [country, setCountry] = useState<string>('');
        const [zip, setZip] = useState<string>('');
        const [covidDate, setCovidDate] = useState<string>('');
        const [covid, setCovid] = useState<boolean>(false);
        const [object, setObject] = useState<ITripObject | null>(null);
        const dispatch = useDispatch();
        useEffect(() => {
            if (trips && idTrips) setObject(trips.find(i => i.id === idTrips))
        }, [trips, idTrips]);
        useEffect(() => {
            if (page === 'Edit trip' && object) {
                setStart(object.start_date)
                setEnd(object.end_date)
                setCompany(object.company_name)
                setStreet(object.address.street.split(', ', 1)[0])
                setStreetNum(object.address.street.split(', ', 2)[1] ? object.address.street.split(', ', 2)[1] : '')
                setCity(object.address.city)
                setCountry(object.address.country)
                setZip(object.address.zip)
                setCovidDate(object.covid_test_date)
                setCovid(object.covid)
            }
        }, [page, object]);
        const clickHandler = useCallback(async () => {
            try {
                await createTrip({
                    start_date: start,
                    end_date: end,
                    company_name: company,
                    address: {
                        street: street + ', ' + streetNum,
                        city: city,
                        country: country,
                        zip: zip
                    },
                    covid: covid,
                    covid_test_date: covidDate
                })
                dispatch(fetchTrips())
                dispatch(isPage('SIDEBAR'))
                dispatch(outIdTrip())
            } catch (e) {
                console.log(e)
            }
        }, [dispatch, country, covid, city, company, covidDate, start, street, streetNum, zip, end])
        const handlerEdit = useCallback(async () => {
            try {
                await changeTrip(object?.id, {
                    start_date: start,
                    end_date: end,
                    company_name: company,
                    address: {
                        street: street + ', ' + streetNum,
                        city: city,
                        country: country,
                        zip: zip
                    },
                    covid: covid,
                    covid_test_date: covidDate
                })
                dispatch(fetchTrips())
                dispatch(isPage('Your trips'))
                dispatch(outIdTrip())
            } catch (e) {
                console.log(e)
            }
        }, [dispatch, country, covid, city, company, covidDate, start, street, streetNum, zip, end, object])
        const handlerStart = useCallback((arg: string): void => {
            setStart(arg)
        }, [])
        const handlerEnd = useCallback((arg: string): void => {
            setEnd(arg)
        }, [])
        const handlerCountry = useCallback((arg: string): void => {
            setCountry(arg)
        }, [])
        const handlerCompany = useCallback((arg: string): void => {
            setCompany(arg)
        }, [])
        const handlerStreet = useCallback((arg: string): void => {
            setStreet(arg)
        }, [])
        const handlerStreetNum = useCallback((arg: string): void => {
            setStreetNum(arg)
        }, [])
        const handlerCity = useCallback((arg: string): void => {
            setCity(arg)
        }, [])
        const handlerZip = useCallback((arg: string): void => {
            setZip(arg)
        }, [])
        const handlerCovidDate = useCallback((arg: string): void => {
            if (arg !== '') {
                setCovid(true)
                setCovidDate(arg)
            } else {
                setCovid(false)
                setCovidDate('')
            }
        }, [])

        return (
            <>
                <div className='input-collum-wrap'>
                    <div className='input-collum'>
                        <InputCountry object={object} countryDefine={handlerCountry}/>
                        <InputDate object={object} start={handlerStart} end={handlerEnd}/>
                        <InputCompany object={object} company={handlerCompany} street={handlerStreet}
                                      streetNum={handlerStreetNum} city={handlerCity} zip={handlerZip}/>
                        <InputCovid object={object} covidDate={handlerCovidDate}/>
                    </div>
                </div>
                {page === 'View trip' ? '' :
                    <>
                        <div className='border-bot'></div>
                        <div className='btn_card_trip-wrap'>
                            <div onClick={page === 'New trip' ? clickHandler : handlerEdit} className='btn_card_trip'>
                                <span>Save</span>
                                <img src='/images/Check.svg' alt='logo' width={16} height={16}/>
                            </div>
                        </div>
                    </>}
            </>
        );
    }
;

export default ChangeCard;