import React from "react";
import Image from "next/image";

import style from "./alert.module.scss";
import alert from "../../assets/alert.svg";

const Alert = ({ alertMsg, bgColor }) => {

    const mainDivStyle = bgColor ? { backgroundColor: bgColor } : { backgroundColor: "white" }

    return (
        <div className={style.mainDiv} style={mainDivStyle}>
            <Image className={style.img} src={alert} alt="alert" />
            <p className={style.text}>{alertMsg}</p>
        </div>
    )
}

export default Alert;
