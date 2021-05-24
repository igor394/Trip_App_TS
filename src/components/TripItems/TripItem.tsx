import React, {FC} from 'react';
import '../../style/TripItem.scss'
import {useTypedSelector} from "../../store/hooks/useTypeSelector";

const TripItem: FC = () => {
    const {country} = useTypedSelector(state => state.country)
    const {trips} = useTypedSelector(state => state.trips)
    return (
        <>
            {trips.map((elem, index) =><div key={elem.id}  className='wrapper'>
                <div className='country'>
                    <img src={"/images/country/" + country.find(i=> i.label=== elem?.address.country)?.value + ".svg"} alt="country"/>
                    <p>Austria</p>
                </div>
                <div className='company'>
                    <p>{elem.address.country}</p>
                    <div>{elem.company_name}</div>
                    <div>{elem.address.city} {elem.address.street} {elem.address.zip}</div>
                </div>
                <div className='date'>
                    <p>Date</p>
                    <div>{elem.start_date} {elem.end_date}</div>
                </div>
                <div className='btn_view'>
                    <span>Edit trip</span>
                    <img src="/images/Edit.svg" alt="arrow" width={16} height={16}/>
                </div>
            </div>)}
        </>

    );
};

export default TripItem;