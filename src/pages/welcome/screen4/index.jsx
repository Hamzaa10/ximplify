import React, { useState } from 'react'

import Button from '@/components/button'

import style from '../../../styles/screen4.module.scss'

const Screen4 = ({ setActive }) => {

    const [selectedBtn, setSelectedBtn] = useState()

    return (
        <div className={style.text}>
            <p className={style.p1}>How many people will you be working with?</p>
            <p className={style.p2}>
                You can also use the name of your company or organization
            </p>
            <div className={style.upperDiv}>
                {btn?.map(({ text }, index) => {
                    return (
                        <span
                            key={index}
                            className={`${style.btn} ${selectedBtn === index ? style.selected : ''}`}
                            onClick={() => setSelectedBtn(index)}
                        >
                            {text}
                        </span>
                    )
                })}
            </div>
            <div className={style.btnDiv}>
                <Button
                    handleClick={() => setActive(3)}
                    text="Back"
                    btnClass={style.btnBack}
                    btnTextClass={style.backText}
                />
                <Button
                    handleClick={() => setActive(5)}
                    text="Save & Continue"
                    btnClass={style.btn}
                    btnTextClass={style.btnText}
                />
            </div>
        </div>
    )
}

export default Screen4


const btn = [
    { index: '1', text: 'Just Me' },
    { index: '2', text: '2-5' },
    { index: '3', text: '6-10' },
    { index: '4', text: '11-25' },
    { index: '5', text: '26-50' },
    { index: '6', text: '51-200' },
    { index: '7', text: '201-500' },
    { index: '8', text: '500+' },
    { index: '9', text: 'I Don’t Know' },
]