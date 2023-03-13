import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/button'
import TextField from '@/components/textfield'
import SideInterface from '@/components/side-interface'

import style from '../../styles/signup.module.scss'
import eye from '../../assets/eye.svg'
import logo from '../../assets/ximplify.svg'
import eyeClose from '../../assets/eyeclose.svg'

const SignUp = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    return (
        <div className={style.container}>
            <div className={style.grid}>
                <div className={style.leftDiv}>
                    <Image className={style.logo} src={logo} alt='logo' />
                    <p className={style.p1}>Sign Up</p>
                    <p className={style.p2}>Fill in the data for profile. It will take a couple of minutes. We only need some information.</p>
                    <div style={{ marginBottom: '16px', position: 'relative' }}>
                        <TextField
                            label='Email'
                            placeholder='Enter your email'
                        />
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                        <TextField
                            label='Name'
                            placeholder='Enter your name'
                        />
                    </div>
                    <div style={{ position: 'relative', marginBottom: '16px' }}>
                        <label
                            className={style.loginLabel}
                        >
                            Password
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                className={style.loginInput}
                                name="enterpassword"
                                placeholder={'Enter your password'}
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
                    <div style={{ position: 'relative', marginBottom: '20px' }}>
                        <label
                            className={style.loginLabel}
                        >
                            Confirm Password
                            <input
                                type={confirmPasswordVisible ? 'text' : 'password'}
                                className={style.loginInput}
                                name="confirmpassword"
                                placeholder={'Confirm your password'}
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
                    <Link href='/confirmationCode' style={{ textDecoration: 'none' }}>
                        <Button text='Sign Up' btnClass={style.signUp} />
                    </Link>
                    <div className={style.logIn}>
                        <p>Already have an Account?</p>
                        <Link href='/login' style={{ textDecoration: 'none' }}>
                            <Button text='Log in' btnTextClass={style.btnText} btnClass={style.btn} />
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

export default SignUp
