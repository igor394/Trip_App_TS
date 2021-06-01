import React, {useState, useEffect} from 'react';
import '../styles/MainContainer.scss';
import ChangeCard from './ChangeCard';
import {useTypedSelector} from '../store/hooks/useTypeSelector';
import {isPage} from '../store/reducers/stateReducer';
import {useDispatch} from 'react-redux';
import TripsList from './TripsList';

const MainContainer = () => {
    const [state, setState] = useState<string>('main-wrap')
    const {media, page} = useTypedSelector(state => state.stateData)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!media && page === 'SIDEBAR') setState('hide')
        else setState('main-wrap')
    }, [page, media]);
    const clickHandler = (): void => {
        dispatch(isPage('SIDEBAR'))
    }

    return (
        <div className={state}>
                <div className='header-main'>
                    <div onClick={clickHandler} className='burger'>
                        <img src='/images/Hambur.svg' alt='burger' width={12} height={12}/>
                    </div>
                    <div className='main_text'><p>{page==='SIDEBAR'? 'Your trips': page}</p></div>
                </div>
                {page === 'Your trips'||page ==='SIDEBAR' ? <TripsList/> : <ChangeCard/>}
        </div>
    );
};

export default MainContainer;