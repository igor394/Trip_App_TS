import React, {useCallback, useEffect} from 'react'
import './styles/style.scss'
import MainContainer from "./components/MainContainer"
import Sidebar from "./components/Sidebar"
import {useDispatch} from "react-redux"
import {fetchCountries} from "./store/actions/country"
import {fetchTrips} from "./store/actions/trips"
import {isMedia, isNotMedia} from "./store/reducers/stateReducer"
import {useTypedSelector} from "./store/hooks/useTypeSelector"
import SidebarTrips from "./components/SidebarTrips"
import DownloadModal from "./components/DownloadModal";


function App() {
    const {media} = useTypedSelector(state => state.stateData)
    const {loading} = useTypedSelector(state => state.trips)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCountries())
        dispatch(fetchTrips())
    }, [dispatch])
    const handleResize = useCallback(() => window.innerWidth > 992 ? dispatch(isMedia()) : dispatch(isNotMedia()),[dispatch]);
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [dispatch, handleResize]);
    useEffect(() => {
        window.innerWidth > 992 ? dispatch(isMedia()) : dispatch(isNotMedia());
    }, [dispatch]);
    return (
        <div className="main">
            <Sidebar/>
            <MainContainer/>
            {media && <SidebarTrips/>}
            {loading && <DownloadModal/>}
        </div>
    );
}

export default App;
