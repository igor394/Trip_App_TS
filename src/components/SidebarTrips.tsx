import React from 'react';
import '../styles/SidebarTrips.scss'
import TripItem from "./TripItems/TripItem";


const SidebarTrips = () => {

    return (
        <div className='sidebar-trips'>
            <div className='title-sidebar-trips'>Trips</div>
                <TripItem/>
        </div>
    );
};

export default SidebarTrips;