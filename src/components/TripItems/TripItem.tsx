import React, {FC} from 'react';
import '../../style/TripItem.scss'
// import {useTypedSelector} from "../store/hooks/useTypeSelector";

const TripItem: FC = () => {

    return (
        <>
            <div className='wrapper'>
                <div className='country'>
                    <img src="/images/country/at.svg" alt="country"/>
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
                    <span>Edit trip</span>
                    <img src="/images/Edit.svg" alt="arrow" width={16} height={16}/>
                </div>
            </div>
            <div className='wrapper'>
                <div className='country'>
                    <img src="/images/country/at.svg" alt="country"/>
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
        </>

    );
};

export default TripItem;