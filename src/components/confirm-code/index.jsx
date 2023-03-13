import React, { useState, useRef, useEffect } from 'react';
import style from './code.module.scss';

const Code = ({ label, name }) => {
    const [inputValues, setInputValues] = useState([]);
    const inputsRef = useRef([]);

    useEffect(() => {
        if (inputsRef.current[0]) {
            inputsRef.current[0].focus();
        }
    }, []);

    const handleInputChange = (index, event) => {
        const value = event.target.value;

        if (value.length <= 1) {
            const newInputValues = [...inputValues];
            newInputValues[index] = value;
            setInputValues(newInputValues);

            if (value.length === 1 && index < inputsRef.current.length - 1) {
                inputsRef.current[index + 1]?.focus();
            }
        }
    };

    const handleInputKeyDown = (index, event) => {
        if (event.key === 'Backspace' && index > 0 && !event.currentTarget.value) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    return (
        <div className={style.inputContainer}>
            {label && <label>{label}</label>}
            <div className={style.inputs}>
                {input.map(({ index }) => (
                    <input
                        key={index}
                        type="number"
                        maxLength={1}
                        value={inputValues[index] || ''}
                        name={`${name}_${index}`}
                        ref={(input) => (inputsRef.current[index] = input)}
                        onChange={(event) => handleInputChange(index, event)}
                        onKeyDown={(event) => handleInputKeyDown(index, event)}
                    />
                ))}
            </div>
            <p className={style.p}>Confirm your account with code from your email.</p>
        </div>
    );
};

const input = [
    { index: 1 },
    { index: 2 },
    { index: 3 },
    { index: 4 },
];

export default Code;
