import React, {useState, useEffect} from 'react';
import '../style/MainContainer.scss'
import TripsList from "./TripsList";
import ChangeCard from "./ChangeCard";
import {useTypedSelector} from "../store/hooks/useTypeSelector";
import {isPage} from "../store/reducer/stateReducer";
import {useDispatch} from "react-redux";


const MainContainer = () => {
    const [state, setState] = useState<string>('sidebar-wrap')
    const {media, page} = useTypedSelector(state => state.stateData)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!media && page === 'SIDEBAR') setState('hide')
        else setState('sidebar-wrap')
    }, [page, media]);
    const clickHandler = (): void => {
        dispatch(isPage('SIDEBAR'))
    }
    return (
        <div className={state}>
            <div className='header'>
                <div onClick={clickHandler} className='burger'>
                    <img src="/images/Hambur.svg" alt="burger" width={12} height={12}/>
                </div>
                <div className='main_text'><p>Your trips</p></div>
            </div>
            <div className='border-top'>
                {page === 'LIST_TRIP' ? <TripsList/> : <ChangeCard/>}
            </div>
        </div>
    );
};

export default MainContainer;