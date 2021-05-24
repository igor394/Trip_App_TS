import React, {FC, ChangeEvent} from 'react';

interface MyProps {
    company: (arg:string)=> void,
    street: (arg:string)=> void,
    streetNum: (arg:string)=> void,
    city: (arg:string)=> void,
    zip: (arg:string)=> void
}
const InputCompany: FC<MyProps> = ({company, city, zip, street, streetNum}) => {
    const companyHandler = (event: ChangeEvent<HTMLInputElement>):void =>{
            company(event.currentTarget.value)
     }
    const cityHandler = (event: ChangeEvent<HTMLInputElement>):void =>{
        city(event.currentTarget.value)
    }
    const streetHandler = (event: ChangeEvent<HTMLInputElement>):void =>{
        street(event.currentTarget.value)
    }
    const streetHandlerNum = (event: ChangeEvent<HTMLInputElement>):void =>{
        street(event.currentTarget.value)
    }
    const zipHandler = (event: ChangeEvent<HTMLInputElement>):void =>{
        zip(event.currentTarget.value)
    }

    return (
        <div className='wrapper-trip'>
            <div className='input-text'>Company name</div>
            <div><input onChange={companyHandler} className='input' type="text"/></div>

            <div className='input-text'>City</div>
            <div><input onChange={cityHandler} className='input' type="text"/></div>

            <div className='input-text'>Street</div>
            <div><input onChange={streetHandler}className='input' type="text"/></div>

            <div className='input-text'>Street number</div>
            <div><input onChange={streetHandlerNum}className='input' type="text"/></div>

            <div className='input-text'>Zip code</div>
            <div><input onChange={zipHandler} className='input' type="text"/></div>
        </div>
    );
};

export default InputCompany;