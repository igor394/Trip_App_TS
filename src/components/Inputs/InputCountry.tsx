import React, {useState, MouseEvent, FC, useRef} from 'react'
// import {getCountry} from '../../utils/api'

const InputCountry: FC = () => {
    const div = useRef<HTMLDivElement>(null)
    const result = [
        {value: "aw", label: "Netherlands"},
        {value: "gr", label: "Greece"},
        {value: "fr", label: "France"},
        {value: "pt", label: "Portugal"},
        {value: "es", label: "Spain"},
        {value: "it", label: "Italy"},
        {value: "sk", label: "Slovakia"},
        {value: "se", label: "Sweden"},
        {value: "cn", label: "China"},
        {value: "at", label: "Austria"},
        {value: "uk", label: "United Kingdom"}]


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
        let res  = result?.find(i=>i.label===id)?.value
        setValue(res)
        setClassDiv('select-input county-check')
    }


    return (
        <div className='wrapper-trip-select'>
            <div className='input-text first-title'>Where do you want to go</div>
            <div className='select'>
                <div className={classDiv} ref={div} onClick={handlerSelect}>{label}
                    {check ? <div className='img-select'><img src='/images/GlobeCheck.svg' alt=""/></div> :
                        <>
                            <div className='img-select'><img src={`/images/country/${value}.svg`} width={20} alt=""/></div>
                            <div className='img-select-arrow'><img src="/images/Vector.svg" alt=""/></div>
                        </>}
                </div>
                {check && <div className='option-wrap'>
                    {result.map((item, index)=>
                        <div key={item.value} id={item.label} onClick={selectCountry}><img src={`/images/country/${item.value}.svg`} alt="country" width={20}/><span>{item.label}</span></div>
                    )}

                </div>}
            </div>
        </div>
    );
};

export default InputCountry;