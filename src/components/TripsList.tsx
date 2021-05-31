import React from 'react';
import TripItemDesktop from "./TripItems/TripItemDesktop";
import {useTypedSelector} from "../store/hooks/useTypeSelector";
import TripItem from "./TripItems/TripItem";


const TripsList = () => {
    const {media} = useTypedSelector(state => state.stateData)
    const {trips, loading} = useTypedSelector(state => state.trips)
    return (
        <div>{trips.length===0 && !loading? <div className='not-trip-text'>
                You do not have completed trips, please go to the section of creating New Trip!
        </div>:
            <>
            {media?<TripItemDesktop/>:<TripItem/>}
            </>}
        </div>

    );
};

export default TripsList;