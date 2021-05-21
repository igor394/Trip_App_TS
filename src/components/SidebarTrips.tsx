import React from 'react';
import TripsList from "./TripsList";

const SidebarTrips = () => {
    return (
        <div style={{width:'320px', padding: '0 20px', borderLeft:'1px solid #F1F1F2'}}>
            <div className='title-sidebar-trips'>Trips</div>
            <TripsList/>
        </div>

    );
};

export default SidebarTrips;