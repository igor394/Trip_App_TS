import React from 'react';

const TripItemDesktop = () => {
    return (
        <>
            <div className='wrapper-desktop'>
                <div className='country-desktop'>
                    <img src="/images/country/at.svg" alt="country"/>
                </div>
                <div className='desktop-info'>
                    <div>
                        <p>Austria</p>
                        <div className='border-desktop-info'></div>
                        <div>Jul 14 - Sep 20, 2019</div>
                    </div>
                    <div>
                        <span>Diamler ASD</span>
                        <div className='border-desktop-info'></div>
                        <div>Mercedes-Benz Plant Berlin' 143Plant Berlenz Plant Berlin' 143Plant Berlin' 143, 122...</div>
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
        </>

    );
};


export default TripItemDesktop;