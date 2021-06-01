import React, {FC, MouseEvent, useCallback} from 'react';
import '../../styles/TripItem.scss';
import {useTypedSelector} from '../../store/hooks/useTypeSelector';
import {isIdTrip, isPage} from '../../store/reducers/stateReducer';
import {useDispatch} from 'react-redux';

const TripItem: FC = () => {
    const {country} = useTypedSelector(state => state.country);
    const {trips} = useTypedSelector(state => state.trips);
    const dispatch = useDispatch();
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
            {trips.map((elem, index) => <div key={elem.id} className='wrapper'>
                <div className='country'>
                    <img src={'/images/country/' + country.find(i => i.label === elem?.address.country)?.value + '.svg'}
                         alt='country'/>
                    <p>{elem.address.country}</p>
                </div>
                <div className='company'>
                    <p>Company</p>
                    <div>{elem.company_name}</div>
                    <div>{elem.address.city} {elem.address.street} {elem.address.zip}</div>
                </div>
                <div className='date'>
                    <p>Date</p>
                    <div>{elem.start_date} {elem.end_date}</div>
                </div>
                {Date.now() > Date.parse(elem.end_date) ?
                    <div onClick={viewHandler} id={elem.id} className='btn_view'>
                        <span>View trip</span>
                        <img src='/images/ArrowRight.svg' alt='arrow' width={16} height={16}/>
                    </div>
                    :
                    <div onClick={editHandler} id={elem.id}  className='btn_view edit'>
                        <span>Edit trip</span>
                        <img src='/images/Edit.svg' alt='arrow' width={16} height={16}/>
                    </div>
                }
            </div>)}
        </>

    );
};

export default TripItem;