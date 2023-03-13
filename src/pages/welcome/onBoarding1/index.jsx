import React from 'react'
import Image from 'next/image'

import Button from '@/components/button'

import style from '../../../styles/screen1.module.scss'
import arrow from '../../../assets/right.svg'

const Screen1 = ({ active, setActive }) => {
    return (
        <div className={style.text}>
            <p className={style.p1}>Welcome to Ximplify App</p>
            <p className={style.p2}>This will only take a minute</p>
            <Button
                handleClick={() => setActive(2)}
                text="Let’s do it"
                iconEnd={arrow}
                btnClass={style.btn}
                btnTextClass={style.btnText}
                imgClass={style.img}
            />
        </div>
    )
}

export default Screen1
