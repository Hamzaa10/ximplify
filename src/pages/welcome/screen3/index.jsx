import React, { useState } from 'react'
import { CirclePicker } from 'react-color'
import Dropzone from 'react-dropzone'

import Image from 'next/image'

import Button from '@/components/button'

import style from '../../../styles/screen3.module.scss'
import upload from '../../../assets/uploadImg.svg'

const Screen3 = ({ setActive }) => {
    const [color, setColor] = useState('#fff');
    const [image, setImage] = useState(null);

    const handleChange = (newColor) => {
        setColor(newColor.hex);
    };

    return (
        <div className={style.text}>
            <p className={style.p1}>Customize your Workspace’s avatar:</p>
            <p className={style.p2}>
                You can also use the name of your company or organization
            </p>
            <div className={style.main}>
                <div className={style.dropzoneWrapper}>
                    <Dropzone
                        multiple={false}
                        onDrop={(acceptedFiles) => setImage(URL.createObjectURL(acceptedFiles[0]))}
                    >
                        {({ getRootProps, getInputProps }) => (
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <div className={style.dropzone}>
                                    {image ? (
                                        <Image className={style.preview} src={image} alt="uploaded image" width="200" height="200" />
                                    ) : (
                                        <p>
                                            <Image style={{ marginBottom: '5px' }} src={upload} alt='upload' /><br />
                                            Drop an image or
                                            <span>
                                                browse
                                            </span>
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}
                    </Dropzone>
                </div>
                <div className={style.colorDiv}>
                    <CirclePicker
                        color={color}
                        onChange={handleChange}
                        colors={[
                            "#333333", "#4F4F4F", "#828282", "#BDBDBD", "#E0E0E0",
                            "#F2F2F2", "#EB5757", "#F2994A", "#F2C94C", "#219653",
                            "#27AE60", "#6FCF97", "#2F80ED", "#2D9CDB", "#56CCF2",
                            "#9B51E0", "#BB6BD9"
                        ]}
                    />
                </div>
            </div>
            <div className={style.btnDiv}>
                <Button
                    handleClick={() => setActive(2)}
                    text="Back"
                    btnClass={style.btnBack}
                    btnTextClass={style.backText}
                />
                <Button
                    handleClick={() => setActive(4)}
                    text="Save & Continue"
                    btnClass={style.btn}
                    btnTextClass={style.btnText}
                />
            </div>
        </div>
    );
};


export default Screen3
