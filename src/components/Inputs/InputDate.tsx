import React, { ChangeEvent, FC} from 'react'

import "react-datepicker/dist/react-datepicker.css"

interface MyProps {
    start: (arg:string)=> void,
    end: (arg:string)=> void,
}

const InputDate:FC<MyProps> = ({start, end}) => {

    const handlerStart = (event: ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault()
        start(event.currentTarget.value)
    }
    const handlerEnd = (event: ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault()
        end(event.currentTarget.value)
    }

    return (
        <div className='wrapper-trip'>
            <div className='input-text'>Start date</div>
            <div><input onChange={handlerStart} className='input' type="date"/></div>
            <div className='input-text'>End date</div>
            <div><input onChange={handlerEnd} className='input' type="date"/></div>
        </div>
    );
};

export default InputDate;