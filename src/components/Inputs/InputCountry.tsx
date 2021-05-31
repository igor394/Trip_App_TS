import React, {useState, useEffect, MouseEvent, FC} from 'react'
import {useTypedSelector} from "../../store/hooks/useTypeSelector"
import ITripObject from '../../utils/interfaces/index'

interface MyProps {
    countryDefine: (arg:string)=> void,
    object: ITripObject | null
}

const InputCountry: FC<MyProps> = ({countryDefine, object}) => {
    const {page} = useTypedSelector(state => state.stateData)
    const {country} = useTypedSelector(state => state.country)
    const [value, setValue] = useState<string | undefined>('GlobeUp')
    const [label, setLabel] = useState<string>('Select country')
    const [classDiv, setClassDiv] = useState<string>('select-input')
    const [check, setCheck] = useState<boolean>(false)


    const handlerSelect = (): void => {
        setCheck(true)
    }
    const selectCountry = (event: MouseEvent<HTMLElement>): void => {
        let id: string = event.currentTarget.id
        setCheck(false)
        setLabel(id)
        let res = country?.find(i => i.label === id)?.value
        setValue(res)
        setClassDiv('select-input county-check')
        countryDefine(id)
    }
    useEffect(() => {
        if(page==='Edit trip'&& object) {
            setLabel(object.address.country)
            setValue(country?.find(i => i.label === object.address.country)?.value)
            // countryDefine(country?.find(i => i.label === object.address.country)?.label)
        }else {
            setLabel('Select country')
            setValue('GlobeUp')
        }
        }, [page, object, country]);


    return (
        <div className='wrapper-trip-select'>
            <div className='input-text first-title'>Where do you want to go</div>

            {page==='New trip' &&<div className='select'>
                <div className={classDiv} onClick={handlerSelect}>{label}
                    {check ? <div className='img-select'><img src='/images/GlobeCheck.svg' alt=""/></div> :
                        <>
                            <div className='img-select'><img src={`/images/country/${value}.svg`} width={20} alt=""/>
                            </div>
                            <div className='img-select-arrow'><img src="/images/Vector.svg" alt=""/></div>
                        </>}
                </div>
                {check && <div className='option-wrap'>
                    {country.map((item, index) =>
                        <div key={item.value} id={item.label} onClick={selectCountry}><img
                            src={`/images/country/${item.value}.svg`} alt="country"
                            width={20}/><span>{item.label}</span></div>)}
                </div>}
            </div>}

            {page==='Edit trip' && <div className='select'>
                <div className={classDiv} onClick={handlerSelect}>{label}
                            <div className='img-select'><img src={`/images/country/${value}.svg`} width={20} alt=""/>
                            </div>
                            <div className='img-select-arrow'><img src="/images/Vector.svg" alt=""/></div>

                </div>
                {check && <div className='option-wrap'>
                    {country.map((item, index) =>
                        <div key={item.value} id={item.label} onClick={selectCountry}><img
                            src={`/images/country/${item.value}.svg`} alt="country"
                            width={20}/><span>{item.label}</span></div>
                    )}
                </div>}
            </div>}

            {page==='View trip' && <div className='select'>
                <div className={classDiv} onClick={handlerSelect}>{object?.address.country}
                    <div className='img-select'><img src={`/images/country/${country.find(i=>i.label===object?.address.country)?.value}.svg`} width={20} alt="ty"/></div>
                </div>
            </div>}
        </div>
    );
};

export default InputCountry;