import React from 'react';
import TripItem from "./TripItems/TripItem";

const SidebarTrips = () => {
    return (
        <div style={{minWidth:'320px', padding: '0 20px', borderLeft:'1px solid #F1F1F2'}}>
            <div className='title-sidebar-trips'>Trips</div>
                <TripItem/>
                <TripItem/>
        </div>

    );
};

export default SidebarTrips;