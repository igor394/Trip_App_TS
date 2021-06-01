import React, {MouseEvent, useCallback} from 'react';
import '../../styles/TripItem.scss';
import {useTypedSelector} from '../../store/hooks/useTypeSelector';
import {deleteTrip} from '../../utils/api';
import {fetchTrips} from '../../store/actions/trips';
import {useDispatch} from 'react-redux';
import {isPage, isIdTrip} from '../../store/reducers/stateReducer';

const TripItemDesktop = () => {
    const {country} = useTypedSelector(state => state.country);
    const {trips} = useTypedSelector(state => state.trips);
    const dispatch = useDispatch();
    const removeHandler = useCallback(async (event: MouseEvent<HTMLElement>) => {
        try {
            await deleteTrip(event.currentTarget.id)
            dispatch(fetchTrips())
        } catch (e) {
            console.log(e)
        }
    }, [dispatch])
    const viewHandler = useCallback((event: MouseEvent<HTMLElement>): void => {
        dispatch(isPage('View trip'))
        dispatch(isIdTrip(event.currentTarget.id))
    },[])

    const editHandler = useCallback((event: MouseEvent<HTMLElement>): void => {
        dispatch(isPage('Edit trip'))
        dispatch(isIdTrip(event.currentTarget.id))
    },[])
    return (
        <>
            {trips.map((elem, index) =>
                <div key={elem.id} className='desktop-container'>
                    <div className='wrapper-desktop'>
                        <div className='country-desktop'>
                            <img
                                src={'/images/country/' + country.find(i => i.label === elem?.address.country)?.value + '.svg'}
                                alt='country'/>
                        </div>
                        <div className='desktop-info'>
                            <div>
                                <p>{elem.address.country}</p>
                                <div className='border-desktop-info'></div>
                                <div>{elem.start_date} {elem.end_date}</div>
                            </div>
                            <div>
                                <span>{elem.company_name}</span>
                                <div className='border-desktop-info'></div>
                                <div>{elem.address.city} {elem.address.street} {elem.address.zip}</div>
                            </div>
                        </div>
                        <div className='btn-desktop-row'>
                            <div onClick={removeHandler} id={elem.id} className='btn_view btn-remove'>
                                <img src='/images/Remove.svg' alt='arrow' width={16} height={16}/>
                            </div>
                            {Date.now() < Date.parse(elem.end_date) ?
                                <div onClick={editHandler} id={elem.id} className='btn_view edit'>
                                    <img src='/images/Edit.svg' alt='arrow' width={16} height={16}/>
                                </div> :
                                <div onClick={viewHandler} id={elem.id} className='btn_view'>
                                    <img src='/images/ArrowRight.svg' alt='arrow' width={16} height={16}/>
                                </div>}
                        </div>
                    </div>
                </div>)}
        </>
    );
};

export default TripItemDesktop;