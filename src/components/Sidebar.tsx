import React from 'react'
import '../style/Sidebar.scss'

const Sidebar = () => {
    return (
        <div className='navbar'>
            <div className='header'>
                <div className='burger'><img src="/images/Close.svg" alt="logo" width={12} height={12}/></div>
                <div className='main_logo'><img src="/images/Logo.svg" alt="logo" width={134} height={38}/></div>
            </div>
            <div className='btn_new_trip'><span>New Trip</span><img src="/images/Plus.svg" alt="logo" width={16} height={16}/></div>
            <div className='link_list'>
                <div className='link_new_trip'><img src="/images/ClockB.svg" alt="logo"/><span>Your trips</span></div>
                <div className='link_future'><img src="/images/Edit.svg" alt="logo"/><span>Future feature</span></div>
                <div className='link_future'><img src="/images/Globe.svg" alt="logo"/><span>Future section</span></div>
            </div>
        </div>
    );
};

export default Sidebar;

