import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/button'
import TextField from '@/components/textfield'
import SideInterface from '@/components/side-interface'

import style from '../../styles/login.module.scss'
import eye from '../../assets/eye.svg'
import logo from '../../assets/ximplify.svg'
import eyeClose from '../../assets/eyeclose.svg'

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordRequired, setPasswordRequired] = useState(false)

    return (
        <div className={style.container}>
            <div className={style.grid}>
                <div className={style.leftDiv}>
                    <Image className={style.logo} src={logo} alt='logo' />
                    <p className={style.p1}>Log in</p>
                    <p className={style.p2}>Please enter your credentials to access your account</p>
                    <div style={{ marginBottom: '35px', position: 'relative' }}>
                        <TextField
                            label='Email'
                            placeholder='Enter your email'
                        />
                    </div>
                    <div style={{ position: 'relative' }}>
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
                    <div className={style.forgotPass}>
                        <div className={style.innerDiv}>
                            <input type="checkbox" className={style.checkbox} />
                            <label style={{ marginLeft: '8px' }}>Remember me</label>
                        </div>
                        <Link href='/forgotPassword' style={{ textDecoration: 'none' }}>
                            <p>Forgot password?</p>
                        </Link>
                    </div>
                    <Link href='/welcome' style={{ textDecoration: 'none' }}>
                        <Button text='Log in' btnClass={style.signUp} />
                    </Link>
                    <div className={style.logIn}>
                        <p>Don’t have an Account?</p>
                        <Link href='/signUp' style={{ textDecoration: 'none' }}>
                            <Button text='Sign up' btnTextClass={style.btnText} btnClass={style.btn} />
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

export default Login
