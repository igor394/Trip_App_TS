import React, {ChangeEvent, FC} from 'react'
import "react-datepicker/dist/react-datepicker.css"
import {useTypedSelector} from "../../store/hooks/useTypeSelector";
import ITripObject from "../../utils/interfaces";

interface MyProps {
    start: (arg: string) => void,
    end: (arg: string) => void,
    object: ITripObject | null
}

const InputDate: FC<MyProps> = ({start, end, object}) => {
    const {page} = useTypedSelector(state => state.stateData)

    const handlerStart = (event: ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault()
        start(event.currentTarget.value)
    }
    const handlerEnd = (event: ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault()
        end(event.currentTarget.value)
    }

    return (
        <>
            {page === 'New trip' &&
            <div className='wrapper-trip'>
                <div className='input-text'>Start date</div>
                <div><input onChange={handlerStart} className='input' type="date" />
                    <div className=''></div>
                </div>
                <div className='input-text'>End date</div>
                <div><input onChange={handlerEnd} className='input' type="date" /></div>
            </div>}
            {page === 'View trip' &&
            <div className='wrapper-trip'>
                <div className='input-text'>Start date</div>
                <div><input onChange={handlerStart} className='input' type="text" defaultValue={object?.start_date}/>
                </div>
                <div className='input-text'>End date</div>
                <div><input onChange={handlerEnd} className='input' type="text" defaultValue={object?.end_date}/></div>
            </div>}
            {page === 'Edit trip' &&
            <div className='wrapper-trip'>
                <div className='input-text'>Start date</div>
                <div><input onChange={handlerStart} className='input' type="date" defaultValue={object?.start_date}/>
                </div>
                <div className='input-text'>End date</div>
                <div><input onChange={handlerEnd} className='input' type="date" defaultValue={object?.end_date}/></div>
            </div>}

        </>);

}

export default InputDate;