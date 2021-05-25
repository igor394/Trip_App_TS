import React, {useState, FC, MouseEvent, ChangeEvent, useEffect} from 'react'
import '../../styles/ChangeCard.scss'
import ITripObject from "../../utils/interfaces";
import {useTypedSelector} from "../../store/hooks/useTypeSelector";

interface MyProps {
    covidDate: (arg:string)=> void,
    object: ITripObject | null
}
const InputCovid: FC<MyProps> = ({covidDate, object}) => {
    const {page} = useTypedSelector(state => state.stateData)
    const [covid, setCovid] = useState<boolean>(false)
    const [nameYes, setNameYes] = useState<ClassName>('')
    const [nameNo, setNameNo] = useState<ClassName>('')
    type ClassName = '' | 'radio-selected'
    const handlerClick = (event: MouseEvent<HTMLElement>): void => {
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
    }
    const covidHandler = (event:ChangeEvent<HTMLInputElement>) =>{
        covidDate(event.currentTarget.value)
     }
    useEffect(() => {
        if(page==='Edit trip' && object) {
            setCovid(object.covid)
        }else {
            setCovid(false)
        }
    }, [page, object]);

    return (
        <>
             {page === 'New trip' &&<div className='wrapper-trip covid-wrap'>
                <div style={{padding: '20px'}}>
                    <div className='input-text first-title'>Have you been recently tested for <span>COVID-19?</span>
                    </div>
                    <form className='radio-group' action="">
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
                    <div><input onChange={covidHandler} className='input' type="date"/></div>
                </div>}
            </div>}
            {page === 'View trip' &&
            <div className='wrapper-trip covid-wrap'>
                {object?.covid ?
                    <>
                        <div style={{padding: '20px'}}>
                            <div className='input-text first-title'>Have you been recently tested for <span>COVID-19?</span>
                            </div>
                            <form className='radio-group' action="">
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
                            <div><input onChange={covidHandler} className='input' type="text" defaultValue={object.covid_test_date}/></div>
                        </div>
                    </>:
                    <>
                        <div style={{padding: '20px'}}>
                            <div className='input-text first-title'>Have you been recently tested for <span>COVID-19?</span>
                            </div>
                            <form className='radio-group' action="">
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
            {page === 'Edit trip' &&<div className='wrapper-trip covid-wrap'>
                <div style={{padding: '20px'}}>
                    <div className='input-text first-title'>Have you been recently tested for <span>COVID-19?</span>
                    </div>
                    <form className='radio-group' action="">
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
                    <div><input onChange={covidHandler} className='input' type="date" defaultValue={object?.covid_test_date}/></div>
                </div>}
            </div>}
        </>

    );
};

export default InputCovid;