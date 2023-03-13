import React from 'react'
import Image from 'next/image'
import Loading from '../loading'
import style from './button.module.scss'

const MobileButton = ({
  mobileIcon,
  handleClick,
  type,
  isLoading,
  btnClass,
  disabled,
  btnLoaderClass,
}) => {
  return (
    <>
      {/* Mobile Screen MobileButton */}
      <button
        className={`${style.btn2} ${btnClass}`}
        type={type}
        onClick={handleClick && handleClick}
        disabled={isLoading || disabled ? true : false}
        style={{
          pointerEvents: isLoading ? 'none' : 'auto',
        }}
      >
        {isLoading ? (
          <Loading loaderClass={btnLoaderClass} />
        ) : (
          <>
            {mobileIcon && (
              <Image src={mobileIcon} alt="" className={style.img} />
            )}
          </>
        )}
      </button>
    </>
  )
}
export default MobileButton
