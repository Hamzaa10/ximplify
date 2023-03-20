import React, { useState } from 'react'
import Select from 'react-select'

import Button from '@/components/button'

import style from '../../../styles/screen7.module.scss'
import TextField from '@/components/textfield'

const Screen7 = ({ setActive }) => {
    // const [selectedValues, setSelectedValues] = useState([]);

    // const handleChange = (selectedOptions) => {
    //     setSelectedValues(selectedOptions);
    // };

    return (
        <div className={style.text}>
            <p className={style.p1}>Invite your Admins</p>
            <p className={style.p2}>
                Enter the mail of your company admins.
            </p>
            {/* <Select
                isMulti
                value={selectedValues}
                onChange={handleChange}
            /> */}
            <TextField
                placeholder='Enter email addresses (or paste multiple)'
                type='email'
            />
            <div className={style.btnDiv}>
                <Button
                    handleClick={() => setActive(6)}
                    text="Back"
                    btnClass={style.btnBack}
                    btnTextClass={style.backText}
                />
                <Button
                    handleClick={() => setActive(8)}
                    text="I'm Done"
                    btnClass={style.btn}
                    btnTextClass={style.btnText}
                />
            </div>
        </div>
    )
}

export default Screen7
