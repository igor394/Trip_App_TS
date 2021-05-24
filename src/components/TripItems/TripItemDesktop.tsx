import React from 'react';
import '../../style/TripItem.scss'
import {useTypedSelector} from "../../store/hooks/useTypeSelector";

const TripItemDesktop = () => {
    const {country} = useTypedSelector(state => state.country)
    const {trips} = useTypedSelector(state => state.trips)
    return (
        <>
            {trips.map((elem, index) =>
                <div key={elem.id} className='desktop-container'>
                    <div className='wrapper-desktop'>
                        <div className='country-desktop'>
                            <img src={"/images/country/" + country.find(i=> i.label=== elem?.address.country)?.value + ".svg"} alt="country"/>
                        </div>
                        <div className='desktop-info'>
                            <div>
                                <p>{elem.address.country}</p>
                                <div className='border-desktop-info'></div>
                                <div>{elem.start_date} {elem.end_date}</div>
                            </div>
                            <div>
                                <span>{elem.company_name}</span>
                                <div className='border-desktop-info'></div>
                                <div>{elem.address.city} {elem.address.street} {elem.address.zip}</div>
                            </div>
                        </div>
                        <div className='btn-desktop-row'>
                            <div className='btn_view btn-remove'>
                                <img src="/images/Remove.svg" alt="arrow" width={16} height={16}/>
                            </div>
                            <div className='btn_view'>
                                <img src="/images/Edit.svg" alt="arrow" width={16} height={16}/>
                            </div>
                        </div>
                    </div>
                </div>)}
        </>


    );
};


export default TripItemDesktop;