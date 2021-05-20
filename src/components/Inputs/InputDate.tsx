import React from 'react'

import "react-datepicker/dist/react-datepicker.css"

const InputDate = () => {
    // const [startDate, setStartDate] = useState(new Date());

    return (
        <div className='wrapper-trip'>
            <div className='input-text'>Start date</div>
            <div><input className='input' type="date"/></div>
            <div className='input-text'>End date</div>
            <div><input className='input' type="date"/></div>
        </div>
    );
};

export default InputDate;