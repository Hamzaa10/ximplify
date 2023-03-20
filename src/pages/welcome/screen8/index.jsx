import React from 'react'
import Image from 'next/image'

import Button from '@/components/button'

import style from '../../../styles/screen8.module.scss'
import arrow from '../../../assets/right.svg'

const Screen8 = ({ setActive }) => {
    return (
        <div className={style.text}>
            <p className={style.p1}>Thats it. Now go and change the world!
                🎉</p>
            <p className={style.p2}>Don’t forget to have fun.</p>
            <Button
                handleClick={() => setActive(8)}
                text="Let’s Play with Ximplify App"
                iconEnd={arrow}
                btnClass={style.btn}
                btnTextClass={style.btnText}
                imgClass={style.img}
            />
        </div>
    )
}

export default Screen8
