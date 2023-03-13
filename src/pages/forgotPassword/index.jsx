import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/button'
import TextField from '@/components/textfield'
import SideInterface from '@/components/side-interface'

import style from '../../styles/forgot.module.scss'
import logo from '../../assets/ximplify.svg'

const Forgot = () => {
    // const [emailValid, setEmailValid] = useState(false);

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
                    <p className={style.p1}>Forgot Password</p>
                    <p className={style.p2}>Enter your email address and we’ll send you a link
                        to reset your password</p>
                    <div style={{ marginBottom: '35px', position: 'relative' }}>
                        {/* {emailValid ? null : (
                            <div className={style.requiredMsg}>Required</div>
                        )} */}
                        <TextField
                            label='Email Address'
                            placeholder='Enter your email address'
                        // onChange={handleEmailChange}
                        // style={{ borderColor: emailValid ? null : 'red' }}
                        />
                    </div>
                    <Link href='' style={{ textDecoration: 'none' }}>
                        <Button text='Send Email' btnClass={style.signUp} />
                    </Link>
                    <div className={style.logIn}>
                        {/* <p>Don’t have an Account?</p> */}
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

export default Forgot
