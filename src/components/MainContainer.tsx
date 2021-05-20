import React from 'react';
import '../style/MainContainer.scss'
// import TripsList from "./TripsList";
import ChangeCard from "./ChangeCard";


const MainContainer = () => {
    return (
        <div>
            <div className='header-card'>
                <div className='burger'><img src="/images/Hambur.svg" alt="burger" width={12} height={12}/></div>
                <div className='main_text'><p>Your trips</p></div>
            </div>
            {/*<TripsList/>*/}
            <ChangeCard/>
        </div>
    );
};

export default MainContainer;