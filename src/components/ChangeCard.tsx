import React from 'react'
import '../style/ChangeCard.scss'
import InputCountry from "./Inputs/InputCountry"
import InputDate from "./Inputs/InputDate"
import InputCompany from "./Inputs/InputCompany"
import InputCovid from "./Inputs/InputCovid"

const ChangeCard = () => {
    const clickHandler = (): void => {
    }

    return (
        <div style={{paddingBottom: '20px'}}>
            <div className='input-collum'>
                <InputCountry/>
                <InputDate/>
                <InputCompany/>
                <InputCovid/>
            </div>
            <div className='border-bot'></div>
            <div onClick={clickHandler} className='btn_card_trip'>
                <span>Save</span>
                <img src="/images/Check.svg" alt="logo" width={16} height={16}/>
            </div>
        </div>
    );
};

export default ChangeCard;