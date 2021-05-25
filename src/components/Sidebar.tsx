import React, {useEffect, useState} from 'react'
import '../styles/Sidebar.scss'
import {useTypedSelector} from "../store/hooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {isPage} from "../store/reducers/stateReducer";

const Sidebar = () => {
    const [state, setState] = useState<string>('sidebar-wrap')
    const {media, page} = useTypedSelector(state => state.stateData)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!media && page !== 'SIDEBAR') setState('hide')
        else setState('sidebar-wrap')
    }, [page, media]);
    const clickHandler = (): void => {
        dispatch(isPage('Your trips'))
    }
    const clickHandlerNewTrip = (): void => {
        dispatch(isPage('New trip'))
    }
    return (
        <div className={state}>
            <div className='sidebar-container'>
                <div className='header'>
                    <div onClick={clickHandler} className='burger'><img src="/images/Close.svg" alt="logo" width={12} height={12}/></div>
                    <div className='main_logo'><img src="/images/Logo.svg" alt="logo" width={134} height={38}/></div>
                </div>
                <div className='navbar'>
                    <div onClick={clickHandlerNewTrip} className='btn_new_trip'><span>New Trip</span><img
                        src="/images/Plus.svg" alt="logo" width={16} height={16}/></div>
                    <div className='link_list'>
                        <div onClick={clickHandler} className='link_new_trip'><img src="/images/ClockB.svg" alt="logo"/><span>Your trips</span></div>
                        <div className='link_future'><img src="/images/Edit.svg" alt="logo"/><span>Future feature</span>
                        </div>
                        <div className='link_future'><img src="/images/Globe.svg" alt="logo"/><span>Future section</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Sidebar;

