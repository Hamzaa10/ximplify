import React, { useState } from 'react'

import Button from '@/components/button'

import style from '../../../styles/screen6.module.scss'
import TextField from '@/components/textfield'

const Screen6 = ({ setActive }) => {

    const [selectedBtn, setSelectedBtn] = useState()

    return (
        <div className={style.text}>
            <p className={style.p1}>How did you hear about us?</p>
            <p className={style.p2}>
                We will use this to suggest you the best template according to your company.
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
                {selectedBtn === 9 && <TextField
                    label='Please Specify'
                    placeholder='Your text start here'
                />}
            </div>
            <div className={style.btnDiv}>
                <Button
                    handleClick={() => setActive(5)}
                    text="Back"
                    btnClass={style.btnBack}
                    btnTextClass={style.backText}
                />
                <Button
                    handleClick={() => setActive(7)}
                    text="Save & Continue"
                    btnClass={style.btn}
                    btnTextClass={style.btnText}
                />
            </div>
        </div>
    )
}

export default Screen6


const btn = [
    { index: '1', text: 'Linkedin' },
    { index: '2', text: 'Facebook / Instagram' },
    { index: '3', text: 'Youtube' },
    { index: '4', text: 'Friend / Colleague' },
    { index: '5', text: 'Podcast / Radio' },
    { index: '6', text: 'Billboard' },
    { index: '7', text: 'TV / Streaming (Hulu, NBC, etc)' },
    { index: '8', text: 'Tiktok' },
    { index: '9', text: 'Search Engine' },
    { index: '10', text: 'Other' },
]