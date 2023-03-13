import React from 'react';

import style from './progressbar.module.scss';

const ProgressBar = ({ active, setActive }) => {

    const handleClick = (step) => {
        if (step <= active) {
            setActive(step);
        }
    };

    return (
        <>
            <div className={style.mainDiv}>
                {bars?.map((step, index) => (
                    <div
                        key={index}
                        className={`${style.steps} ${index + 1 < active
                            ? style.completed
                            : index + 1 === active
                                ? style.active
                                : ''
                            } ${index + 1 === active + 1 ? style.next : ''}`}
                        onClick={() => handleClick(index + 1)}>
                    </div>
                ))}
            </div>
            <div className={style.text}>
                {active} of {bars.length}
            </div>
        </>
    );
};

export default ProgressBar;

const bars = [
    { index: 1 },
    { index: 2 },
    { index: 3 },
    { index: 4 },
    { index: 5 },
    { index: 6 },
    { index: 7 },
    { index: 8 },
]
