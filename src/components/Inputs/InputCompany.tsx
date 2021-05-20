import React, {FC} from 'react';



const InputCompany: FC = () => {

    return (
        <div className='wrapper-trip'>
            <div className='input-text'>Company name</div>
            <div><input className='input' type="text"/></div>
            <div className='input-text'>City</div>
            <div><input className='input' type="text"/></div>
            <div className='input-text'>Street</div>
            <div><input className='input' type="text"/></div>
            <div className='input-text'>Street number</div>
            <div><input className='input' type="text"/></div>
            <div className='input-text'>Zip code</div>
            <div><input className='input' type="text"/></div>
        </div>
    );
};

export default InputCompany;