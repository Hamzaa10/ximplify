import Image from "next/image";
import Loading from "../loading/index";

import style from "./button.module.scss";

const Button = ({
  text,
  iconStart,
  iconEnd,
  handleClick,
  type,
  className,
  isLoading,
  btnClass,
  disabled,
  btnLoaderClass,
  form,
  btnTextClass,
  id,
  imgClass,
}) => {
  return (
    <>
      <button
        className={`${style.btn} ${btnClass}`}
        type={type}
        id={id && id}
        form={form}
        onClick={handleClick}
        disabled={isLoading || disabled ? true : false}
        style={{
          pointerEvents: isLoading || disabled ? "none" : "auto",
        }}
      >
        {isLoading ? (
          <Loading loaderClass={btnLoaderClass} />
        ) : (
          <>
            {iconStart && (
              <Image src={iconStart} alt="" className={style.img1} />
            )}
            {text && (
              <span
                className={`${style.btnTitle} ${className} ${btnTextClass}`}
              >
                {text}
              </span>
            )}
            {iconEnd && (
              <Image
                src={iconEnd}
                alt=""
                className={`${style.img} ${imgClass}`}
              />
            )}
          </>
        )}
      </button>
    </>
  );
};

export default Button;
