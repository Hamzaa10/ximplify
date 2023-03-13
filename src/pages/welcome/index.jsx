import React, { useState } from 'react'
import Image from 'next/image'

import Screen1 from './screen1'
import Screen2 from './screen2'
import ProgressBar from '@/components/progress-bar'

import style from '../../styles/welcome.module.scss'
import logo from '../../assets/Ximplify.svg'
import help from '../../assets/headphone.svg'
import sideImg from '../../assets/sideImg.svg'

const Welcome = () => {
    const [active, setActive] = useState(1)

    return (
        <div className={style.mainDiv}>
            <div className={style.leftDiv}>
                <Image className={style.logo} src={logo} alt='logo' />
                <div className={style.bar}>
                    <ProgressBar setActive={setActive} active={active} />
                </div>
                {active === 1 && <Screen1 setActive={setActive} />}
                {active === 2 && <Screen2 setActive={setActive} />}
            </div>
            <div className={style.rightDiv}>
                <Image className={style.sideImg} src={sideImg} alt='sideImg' />
                <p className={style.help}><Image src={help} alt='help' /> Need help? <a href=''>Connect with support</a></p>
            </div>
        </div>
    )
}

export default Welcome
