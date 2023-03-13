import React from 'react';
import Image from 'next/image';
// import Slider from "react-slick";

import style from './sideinterface.module.scss';
import one from '../../assets/paperz.svg';
import two from '../../assets/dorfus.svg';
import three from '../../assets/martino.svg';
import four from '../../assets/square.svg';
import five from '../../assets/gobona.svg';
import web from '../../assets/Group 1000004838.png';

const SideInterface = () => {
    // const settings = {
    //     className: "center",
    //     centerMode: true,
    //     infinite: true,
    //     centerPadding: "60px",
    //     slidesToShow: 3,
    //     speed: 500
    // };

    return (
        <div className={style.mainDiv}>
            <p className={style.p1}>The Simplest way to manage your workforce</p>
            <p className={style.p2}>Enter your credentials to access your account</p>
            <Image className={style.img} src={web} alt="web" />
            {/* <Slider {...settings} className={style.slider}> */}
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div className={style.sliderItem}>
                    <Image className={style.img1} src={one} alt="logo" />
                </div>
                <div className={style.sliderItem}>
                    <Image className={style.img1} src={two} alt="logo" />
                </div>
                <div className={style.sliderItem}>
                    <Image className={style.img1} src={three} alt="logo" />
                </div>
                <div className={style.sliderItem}>
                    <Image className={style.img1} src={four} alt="logo" />
                </div>
                <div className={style.sliderItem}>
                    <Image className={style.img1} src={five} alt="logo" />
                </div>
            </div>
            {/* </Slider> */}
        </div>
    )
};

export default SideInterface;
