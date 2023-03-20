import React from 'react'
import { useForm } from 'react-hook-form'

import Button from '@/components/button'
import Selection from '@/components/selection'

import { option } from './helper'

import style from '../../../styles/screen5.module.scss'

const Screen5 = ({ setActive }) => {

    const { control } = useForm();


    return (
        <div className={style.text}>
            <p className={style.p1}>How do you want to start Ximplify?</p>
            <p className={style.p2}>
                We will use this to suggest you the best template according to your company.
            </p>
            <div className={style.select}>
                <Selection
                    text='I will start using Ximplify for'
                    control={control}
                    placeholder="Select"
                    options={option}
                    name="option"
                />
            </div>
            <div className={style.btnDiv}>
                <Button
                    handleClick={() => setActive(4)}
                    text="Back"
                    btnClass={style.btnBack}
                    btnTextClass={style.backText}
                />
                <Button
                    handleClick={() => setActive(6)}
                    text="Save & Continue"
                    btnClass={style.btn}
                    btnTextClass={style.btnText}
                />
            </div>
        </div>
    )
}

export default Screen5
