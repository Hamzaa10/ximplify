import React from 'react'

import Button from '@/components/button'
import TextField from '@/components/textfield'

import style from '../../../styles/screen2.module.scss'

const Screen2 = ({ setActive }) => {
    return (
        <div className={style.text}>
            <p className={style.p1}>Name your Workspace:</p>
            <p className={style.p2}>You can also use the name of your company or organization</p>
            <TextField
                placeholder='Enter your workspace name'
            />
            <div className={style.btnDiv}>
                <Button
                    handleClick={() => setActive(1)}
                    text='Back'
                    btnClass={style.btnBack}
                    btnTextClass={style.backText}
                />
                <Button
                    handleClick={() => setActive(3)}
                    text="Save & Continue"
                    btnClass={style.btn}
                    btnTextClass={style.btnText}
                />
            </div>
        </div>
    )
}

export default Screen2
