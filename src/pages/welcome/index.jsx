import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import Screen1 from './screen1'
import Screen2 from './screen2'
import Screen3 from './screen3'
import Screen4 from './screen4'
import Screen5 from './screen5'
import Screen6 from './screen6'
import Screen7 from './screen7'
import ProgressBar from '@/components/progress-bar'

import style from '../../styles/welcome.module.scss'
import logo from '../../assets/Ximplify.svg'
import help from '../../assets/headphone.svg'
import sideImg from '../../assets/sideImg.svg'
import Screen8 from './screen8'

const Welcome = () => {
    const [active, setActive] = useState(1)

    // useEffect(() => {
    //     function handleScroll() {
    //         if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    //             const element = document.querySelector(`.${style.scroll}`)
    //             element.classList.add(style.slide)
    //         }
    //     }

    //     window.addEventListener('scroll', handleScroll)

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll)
    //     }
    // }, [])

    return (
        <div className={style.mainDiv} style={{ position: 'relative' }}>
            <div className={style.leftDiv} >
                <div>
                    <Image className={style.logo} src={logo} alt='logo' />
                    <div className={style.bar}>
                        <ProgressBar setActive={setActive} active={active} />
                    </div>
                </div>
                {/* <div className={`
                ${style.slideDiv} 
                ${active === 2 && style.screen1}
                ${active === 3 && style.screen2}
                `}> */}
                {active === 1 && <Screen1 setActive={setActive} />}
                {active === 2 && <Screen2 setActive={setActive} />}
                {active === 3 && <Screen3 setActive={setActive} />}
                {active === 4 && <Screen4 setActive={setActive} />}
                {active === 5 && <Screen5 setActive={setActive} />}
                {active === 6 && <Screen6 setActive={setActive} />}
                {active === 7 && <Screen7 setActive={setActive} />}
                {active === 8 && <Screen8 setActive={setActive} />}
                {/* </div> */}
            </div>
            <div className={style.rightDiv}>
                <Image className={style.sideImg} src={sideImg} alt='sideImg' />
                <p className={style.help}>
                    <Image src={help} alt='help' />
                    Need help?
                    <a href=''>Connect with support</a>
                </p>
            </div>
        </div >
    )
}

export default Welcome
