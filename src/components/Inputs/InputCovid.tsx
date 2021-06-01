import React, {useState, FC, MouseEvent, useEffect, useCallback} from 'react';
import '../../styles/ChangeCard.scss';
import ITripObject from '../../utils/interfaces';
import {useTypedSelector} from '../../store/hooks/useTypeSelector';
import DatePicker from 'react-datepicker';

interface MyProps {
    covidDate: (arg: string) => void,
    object: ITripObject | null
}

type ClassName = '' | 'radio-selected'

const InputCovid: FC<MyProps> = ({covidDate, object}) => {
    const {page} = useTypedSelector(state => state.stateData);
    const [covid, setCovid] = useState<boolean>(false);
    const [nameYes, setNameYes] = useState<ClassName>('');
    const [nameNo, setNameNo] = useState<ClassName>('');
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    useEffect(() => {
        if (page === 'Edit trip' && object) {
            setCovid(object.covid)
            if (object.covid) {
                setStartDate(new Date(object?.covid_test_date))
            } else setStartDate(new Date())
        } else {
            setCovid(false)
        }
    }, [page, object]);
    const handlerClick = useCallback((event: MouseEvent<HTMLElement>): void => {
        switch (event.currentTarget.id) {
            case 'yes':
                setNameNo('')
                setNameYes('radio-selected')
                setCovid(true)
                break;
            case 'no':
                setNameNo('radio-selected')
                setNameYes('')
                setCovid(false)
                covidDate('')
                break;
        }
    }, [])
    const covidHandler = useCallback((date: Date | null, event: React.SyntheticEvent<any> | undefined): void => {
        setStartDate(date)
        if (date) covidDate(date.toLocaleDateString().split('.').reverse().join('-'))
    }, [])

    return (
        <>
            {page === 'New trip' && <div className='wrapper-trip covid-wrap'>
                <div style={{padding: '20px'}}>
                    <div className='input-text first-title'>Have you been recently tested for <span>COVID-19?</span>
                    </div>
                    <form className='radio-group'>
                        <div className='radio-btn'>
                            <div onClick={handlerClick} className={`radio-check ${nameYes}`} id='yes'>
                                <div></div>
                            </div>
                            <span>Yes</span>
                        </div>
                        <div className='radio-btn'>
                            <div onClick={handlerClick} className={`radio-check ${nameNo}`} id='no'>
                                <div></div>
                            </div>
                            <span>No</span>
                        </div>
                    </form>
                </div>
                {covid && <div className='covid-date'>
                    <div className='input-text'>Date of receiving test results</div>
                    <DatePicker selected={startDate} onChange={covidHandler}/>
                </div>}
            </div>}
            {page === 'View trip' &&
            <div className='wrapper-trip covid-wrap'>
                {object?.covid ?
                    <>
                        <div style={{padding: '20px'}}>
                            <div className='input-text first-title'>Have you been recently tested
                                for <span>COVID-19?</span>
                            </div>
                            <form className='radio-group'>
                                <div className='radio-btn'>
                                    <div onClick={handlerClick} className='radio-check radio-selected' id='yes'>
                                        <div></div>
                                    </div>
                                    <span>Yes</span>
                                </div>
                                <div className='radio-btn'>
                                    <div onClick={handlerClick} className='radio-check' id='no'>
                                        <div></div>
                                    </div>
                                    <span>No</span>
                                </div>
                            </form>
                        </div>
                        <div className='covid-date'>
                            <div className='input-text'>Date of receiving test results</div>
                            <DatePicker selected={new Date(object?.covid_test_date)} onChange={covidHandler}/>
                        </div>
                    </> :
                    <>
                        <div style={{padding: '20px'}}>
                            <div className='input-text first-title'>Have you been recently tested
                                for <span>COVID-19?</span>
                            </div>
                            <form className='radio-group'>
                                <div className='radio-btn'>
                                    <div onClick={handlerClick} className='radio-check' id='yes'>
                                        <div></div>
                                    </div>
                                    <span>Yes</span>
                                </div>
                                <div className='radio-btn'>
                                    <div onClick={handlerClick} className='radio-check radio-selected' id='no'>
                                        <div></div>
                                    </div>
                                    <span>No</span>
                                </div>
                            </form>
                        </div>
                    </>
                }
            </div>}
            {page === 'Edit trip' &&
            <div className='wrapper-trip covid-wrap'>
                <div style={{padding: '20px'}}>
                    <div className='input-text first-title'>Have you been recently tested for <span>COVID-19?</span>
                    </div>
                    <form className='radio-group'>
                        <div className='radio-btn'>
                            <div onClick={handlerClick} className={`radio-check ${nameYes}`} id='yes'>
                                <div></div>
                            </div>
                            <span>Yes</span>
                        </div>
                        <div className='radio-btn'>
                            <div onClick={handlerClick} className={`radio-check ${nameNo}`} id='no'>
                                <div></div>
                            </div>
                            <span>No</span>
                        </div>
                    </form>
                </div>
                {covid && object && <div className='covid-date'>
                    <div className='input-text'>Date of receiving test results</div>
                    <DatePicker selected={startDate} onChange={covidHandler}/>
                </div>}
            </div>}
        </>
    );
}
export default InputCovid;