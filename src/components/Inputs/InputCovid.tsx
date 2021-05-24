import React, {useState, FC, MouseEvent, ChangeEvent} from 'react'
import '../../style/ChangeCard.scss'

interface MyProps {
    covidDate: (arg:string)=> void,
    
}
const InputCovid: FC<MyProps> = ({covidDate}) => {
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

    return (
        <div className='wrapper-trip covid-wrap'>
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
        </div>
    );
};

export default InputCovid;