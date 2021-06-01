import React, {FC, useState, useEffect, useCallback} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import {useTypedSelector} from '../../store/hooks/useTypeSelector';
import ITripObject from '../../utils/interfaces';
import DatePicker from 'react-datepicker';

interface MyProps {
    start: (arg: string) => void,
    end: (arg: string) => void,
    object: ITripObject | null
}

const InputDate: FC<MyProps> = ({start, end, object}) => {
    const {page} = useTypedSelector(state => state.stateData);
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());

    useEffect(() => {
        if (page === 'Edit trip' && object) {
            setStartDate(new Date(object?.start_date))
            setEndDate(new Date(object?.end_date))
        } else {
            setStartDate(new Date())
            setEndDate(new Date())
        }
    }, [object, page]);
    const handlerStart = useCallback((date: Date | null, event: React.SyntheticEvent<any> | undefined): void => {
        setStartDate(date)
        if (date) start(date.toLocaleDateString().split('.').reverse().join('-'))
    }, [])
    const handlerEnd = useCallback((date: Date | null, event: React.SyntheticEvent<any> | undefined): void => {
        setEndDate(date)
        if (date) end(date.toLocaleDateString().split('.').reverse().join('-'))
    }, [])

    return (
        <>
            {page === 'New trip' &&
            <div className='wrapper-trip'>
                <div className='input-text'>Start date</div>
                <div><DatePicker selected={startDate} onChange={handlerStart}/>
                </div>
                <div className='input-text'>End date</div>
                <div><DatePicker selected={endDate} onChange={handlerEnd}/>
                </div>
            </div>}
            {page === 'View trip' && object &&
            <div className='wrapper-trip'>
                <div className='input-text'>Start date</div>
                <div><DatePicker selected={new Date(object?.start_date)} onChange={handlerStart}/></div>
                <div className='input-text'>End date</div>
                <div><DatePicker selected={new Date(object?.end_date)} onChange={handlerEnd}/></div>
            </div>}
            {page === 'Edit trip' &&
            <div className='wrapper-trip'>
                <div className='input-text'>Start date</div>
                <div><DatePicker selected={startDate} onChange={handlerStart}/></div>
                <div className='input-text'>End date</div>
                <div><DatePicker selected={endDate} onChange={handlerEnd}/></div>
            </div>}

        </>);
}

export default InputDate;