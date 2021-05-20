import React, {useState} from 'react';
import '../style/TripItem.scss'

const TripItem = () => {
    const [state, setState] = useState([
        {}
    ])
    return (
        <div className='wrapper'>
            <div className='country'>
                <img src="/images/country/austria.svg" alt="country"/>
                <p>Austria</p>
            </div>
            <div className='company'>
                <p>Company</p>
                <div>Diamler ASD</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, nisi!</div>
            </div>
            <div className='date'>
                <p>Date</p>
                <div>Jul 14 - Sep 20, 2019</div>
            </div>
            <div className='btn_view'>
                <span>View trip</span>
                <img src="/images/ArrowRight.svg" alt="arrow" width={16} height={16}/>
            </div>
        </div>
    );
};

export default TripItem;