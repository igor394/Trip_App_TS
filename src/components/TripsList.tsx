import React from 'react';
import TripItemDesktop from "./TripItems/TripItemDesktop";
import {useTypedSelector} from "../store/hooks/useTypeSelector";
import TripItem from "./TripItems/TripItem";


const TripsList = () => {
    const {media} = useTypedSelector(state => state.stateData)
    return (
        <div className=''>
         {!media?<TripItem/>: <TripItemDesktop/>}
        </div>

    );
};

export default TripsList;