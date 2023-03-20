import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Alert from '@/components/alert'
import Button from '@/components/button'
import Code from '@/components/confirm-code'
import SideInterface from '@/components/side-interface'

import style from '../../styles/confirmationcode.module.scss'
import logo from '../../assets/ximplify.svg'

const ConfirmationCode = ({ userMail }) => {

    const [secondsLeft, setSecondsLeft] = useState(60);
    const [isResendDisabled, setIsResendDisabled] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setSecondsLeft(secondsLeft - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [secondsLeft]);

    useEffect(() => {
        if (secondsLeft === 0) {
            setIsResendDisabled(false);
        }
    }, [secondsLeft]);

    const formatCountdown = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = remainingSeconds.toString().padStart(2, '0');
        return `${formattedMinutes}:${formattedSeconds}`;
    };

    return (
        <div className={style.container}>
            <div className={style.grid}>
                <div className={style.leftDiv}>
                    <div style={{ marginBottom: '30px' }}>
                        <Image className={style.logo} src={logo} alt='logo' />
                        <p className={style.p1}>We just emailed you</p>
                        <p className={style.p2}>Please enter the code we emailed you.</p>
                        <p className={style.p3}>{userMail ? userMail : 'goingto@die.com'}</p>
                        <div className={style.codeDiv}>
                            <Code label='Confirmation Code' />
                        </div>
                        <div className={style.timer}>
                            {secondsLeft > 0 ? (
                                <p>
                                    The OTP will be expired in:
                                    <span className={style.countdown}>
                                        {formatCountdown(secondsLeft)}
                                    </span>
                                </p>
                            ) : (
                                <span className={style.countdown}>Time Expired</span>
                            )}
                        </div>
                        <Link href='' style={{ textDecoration: 'none' }}>
                            <Button text='Verify' btnClass={style.signUp} />
                        </Link>
                        <div className={style.logIn}>
                            <p>Didn’t receive a code?</p>
                            <span className={style.btnText}
                                style={{ cursor: isResendDisabled ? 'not-allowed' : 'pointer' }}
                                onClick={() => { isResendDisabled ? null : window.location.reload() }}>
                                Resend Code
                            </span>
                        </div>
                    </div>
                    {/* <Alert alertMsg="Invalid Code" bgColor="rgba(254, 40, 26, 0.2)" /> */}
                </div>
                <div className={style.rightDiv} >
                    <SideInterface />
                </div>
            </div>
        </div>
    )
}

export default ConfirmationCode
