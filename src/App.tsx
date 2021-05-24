import React, {useEffect} from 'react'
import './style/style.scss'
import MainContainer from "./components/MainContainer"
import Sidebar from "./components/Sidebar"
import {useDispatch} from "react-redux"
import {fetchCountries} from "./store/actions/country"
import {fetchTrips} from "./store/actions/trips"
import {isMedia, isNotMedia} from "./store/reducer/stateReducer";
import {useTypedSelector} from "./store/hooks/useTypeSelector";
import SidebarTrips from "./components/SidebarTrips";


function App() {
    const {media} = useTypedSelector(state => state.stateData)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCountries())
        dispatch(fetchTrips())
    }, [dispatch])
    useEffect(() => {
        window.innerWidth > 992 ? dispatch(isMedia()) : dispatch(isNotMedia());
        const handleResize = () => window.innerWidth > 992 ? dispatch(isMedia()) : dispatch(isNotMedia());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [dispatch]);
;

    return (
        <div className="main">
            <Sidebar/>
            <MainContainer/>
            {media && <SidebarTrips/>}
        </div>
    );
}

export default App;
