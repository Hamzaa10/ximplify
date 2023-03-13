import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/button'
import SideInterface from '@/components/side-interface'

import style from '../../styles/changepassword.module.scss'
import eye from '../../assets/eye.svg'
import logo from '../../assets/ximplify.svg'
import eyeClose from '../../assets/eyeclose.svg'

const ChangePassword = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [passwordRequired, setPasswordRequired] = useState(false)
    const [confirmPasswordRequired, setConfirmPasswordRequired] = useState(false)
    // const [emailValid, setEmailValid] = useState(false);

    const handlePasswordBlur = (event) => {
        if (event.target.value === '') {
            setPasswordRequired(true)
            event.target.classList.add(style.required)
        } else {
            setPasswordRequired(false)
            event.target.classList.remove(style.required)
        }
    }

    const handleConfirmPasswordBlur = (event) => {
        if (event.target.value === '') {
            setConfirmPasswordRequired(true)
            event.target.classList.add(style.required)
        } else {
            setConfirmPasswordRequired(false)
            event.target.classList.remove(style.required)
        }
    }

    // const handleEmailChange = (e) => {
    //     const email = e.target.value;
    //     const isValid = /\S+@\S+\.\S+/.test(email);
    //     setEmailValid(isValid);
    // }

    return (
        <div className={style.container}>
            <div className={style.grid}>
                <div className={style.leftDiv}>
                    <Image className={style.logo} src={logo} alt='logo' />
                    <p className={style.p1}>Change Password</p>
                    <p className={style.p2}>In order to protect your password make sure your
                        password should strong</p>
                    <div style={{ position: 'relative', marginBottom: '30px' }}>
                        <label
                            className={style.loginLabel}
                        >
                            New Password
                            {passwordRequired && <span className={style.requiredMsg}>Required</span>}
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                className={style.loginInput}
                                name="enterpassword"
                                placeholder={'Enter new password'}
                                onBlur={handlePasswordBlur}
                            />
                            <Image
                                src={passwordVisible ? eyeClose : eye}
                                alt=""
                                className={style.icon}
                                onClick={() =>
                                    setPasswordVisible((prev) => !prev)
                                }
                                height={19}
                                width={19}
                            />
                        </label>
                    </div>
                    <div style={{ position: 'relative', marginBottom: '40px' }}>
                        <label
                            className={style.loginLabel}
                        >
                            Confirm Password
                            {confirmPasswordRequired && <span className={style.requiredMsg}>Required</span>}
                            <input
                                type={confirmPasswordVisible ? 'text' : 'password'}
                                className={style.loginInput}
                                name="confirmpassword"
                                placeholder={'Re-enter your password'}
                                onBlur={handleConfirmPasswordBlur}
                            />
                            <Image
                                src={confirmPasswordVisible ? eyeClose : eye}
                                alt=""
                                className={style.icon}
                                onClick={() =>
                                    setConfirmPasswordVisible((prev) => !prev)
                                }
                                height={19}
                                width={19}
                            />
                        </label>
                    </div>
                    <Link href='/login' style={{ textDecoration: 'none' }}>
                        <Button text='Change Password' btnClass={style.signUp} />
                    </Link>
                    <div className={style.logIn}>
                        <Link href='/login' style={{ textDecoration: 'none' }}>
                            <Button text='Back to Login' btnTextClass={style.btnText} btnClass={style.btn} />
                        </Link>
                    </div>
                </div>
                <div className={style.rightDiv} >
                    <SideInterface />
                </div>
            </div>
        </div>
    )
}

export default ChangePassword
