import React from 'react'
import '../style/ChangeCard.scss'
import InputCountry from "./Inputs/InputCountry"
import InputDate from "./Inputs/InputDate"
import InputCompany from "./Inputs/InputCompany"
import InputCovid from "./Inputs/InputCovid"
import {postTrip} from "../utils/api";

const ChangeCard = () => {
    const onSubmit = () => {

            postTrip({
                start_date: new Date(),
                end_date: new Date(),
                company_name: 'MMM',
                address: {
                    street: 'Pols',
                    city: 'Dnepr',
                    country: 'Ukraine',
                    zip:'1234'
                },
                covid: true,
                covid_test_date: new Date(),
            })};
            onSubmit()


    return (
        <div className='input-collum-wrap'>
            <div className='input-collum'>
                <InputCountry/>
                <InputDate/>
                <InputCompany/>
                <InputCovid/>
            </div>
        </div>

    );
};

export default ChangeCard;