import React, {FC, ChangeEvent, useCallback} from 'react';
import ITripObject from '../../utils/interfaces/index';
import {useTypedSelector} from '../../store/hooks/useTypeSelector';

interface MyProps {
    company: (arg: string) => void,
    street: (arg: string) => void,
    streetNum: (arg: string) => void,
    city: (arg: string) => void,
    zip: (arg: string) => void,
    object: ITripObject | null
}

const InputCompany: FC<MyProps> = ({company, city, zip, street, streetNum, object}) => {
    const {page} = useTypedSelector(state => state.stateData)

    const companyHandler = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
        company(event.currentTarget.value)
    },[])
    const cityHandler = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
        city(event.currentTarget.value)
    },[])
    const streetHandler = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
        street(event.currentTarget.value)
    },[])
    const streetHandlerNum = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
        streetNum(event.currentTarget.value)
    },[])
    const zipHandler = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
        zip(event.currentTarget.value)
    },[])

    return (
        <>
            {page === 'View trip' &&
            <div className='wrapper-trip'>
                <div className='input-text'>Company name</div>
                <div><input onChange={companyHandler} className='input' type='text' disabled defaultValue={object?.company_name}/></div>
                <div className='input-text'>City</div>
                <div><input onChange={cityHandler} className='input' type='text' disabled defaultValue={object?.address.city}/></div>
                <div className='input-text'>Street</div>
                <div><input onChange={streetHandler} className='input' type='text' disabled defaultValue={object?.address.street.split(', ', 1)}/></div>
                <div className='input-text'>Street number</div>
                <div><input onChange={streetHandlerNum} className='input' type='text' disabled defaultValue={object?.address.street.split(', ', 2)[1]}/></div>
                <div className='input-text'>Zip code</div>
                <div><input onChange={zipHandler} className='input' type='text' disabled defaultValue={object?.address.zip}/></div>
            </div>}
            {page === 'New trip' && <div className='wrapper-trip'>
                <div className='input-text'>Company name</div>
                <div><input onChange={companyHandler} className='input' type='text' placeholder='Type here...'/></div>
                <div className='input-text'>City</div>
                <div><input onChange={cityHandler} className='input' type='text' placeholder='Type here...'/></div>
                <div className='input-text'>Street</div>
                <div><input onChange={streetHandler} className='input' type='text' placeholder='Type here...'/></div>
                <div className='input-text'>Street number</div>
                <div><input onChange={streetHandlerNum} className='input' type='text' placeholder='Type here...'/>
                </div>
                <div className='input-text'>Zip code</div>
                <div><input onChange={zipHandler} className='input' type='text' placeholder='Type here...'/></div>
            </div>}
            {page === 'Edit trip' &&
            <div className='wrapper-trip'>
                <div className='input-text'>Company name</div>
                <div><input onChange={companyHandler} className='input' type='text' defaultValue={object?.company_name}/></div>
                <div className='input-text'>City</div>
                <div><input onChange={cityHandler} className='input' type='text' defaultValue={object?.address.city}/>
                </div>
                <div className='input-text'>Street</div>
                <div><input onChange={streetHandler} className='input' type='text' defaultValue={object?.address.street.split(', ', 1)}/></div>
                <div className='input-text'>Street number</div>
                <div><input onChange={streetHandlerNum} className='input' type='text' defaultValue={object?.address.street.split(', ', 2)[1]}/></div>
                <div className='input-text'>Zip code</div>
                <div><input onChange={zipHandler} className='input' type='text'  defaultValue={object?.address.zip}/></div>
            </div>}
        </>
    )
}
;

export default InputCompany;