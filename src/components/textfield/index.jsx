import Image from 'next/image'
import { ChangeEvent, useEffect, useState } from 'react'

import style from './input.module.scss'

const TextField = ({
  label,
  customPlaceholder,
  onChange,
  value,
  name,
  register,
  onClick,
  parentClick,
  type,
  id,
  className,
  placeholder,
  errorMessage,
  icon,
  readOnly,
  isDisable,
  star,
  min,
  max,
  customValidation,
  iconClass,
  step,
  defaultValue,
  container,
  input,
  isPrice,
  selectedValue,
  Required,
  ...restOfProps
}) => {
  const [newValue, setNewValue] = useState('')
  const [required, setRequired] = useState(false);

  useEffect(() => {
    if (isPrice && selectedValue) {
      setNewValue(selectedValue)
    }
  }, [isPrice, selectedValue])

  const formatNumber = (num) => {
    let value = num.replace(/\D/g, '')
    value = value.replace(/^0+/, '')
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return value
  }

  const handleChange = (event) => {
    const inputValue = event.target.value
    const formattedValue = formatNumber(inputValue)
    setNewValue(formattedValue)
  }

  return (
    <>
      <div className={`${style.inputContainer} ${container && container} `}>
        {label && (
          <label>
            {label}
            <b>{star}</b>
          </label>
        )}
        <div
          style={{ position: 'relative' }}
          className={className}
          onClick={parentClick}
        >
          {isPrice ? (
            <input
              className={style.customPlaceholder}
              style={{
                border: errorMessage
                  ? '1px solid #ff5050'
                  : '1px solid #E2E2EA',
                backgroundColor: readOnly ? '' : isDisable ? '#fff' : '',
              }}
              value={`${newValue}`}
              onChange={handleChange}
              id={id ? id : 'inputId'}
              min={min && min}
              max={max && max}
              name={name}
              step={step && step}
              type={type}
              placeholder={placeholder}
              ref={register({ required: required || false })}
              readOnly={readOnly || false}
              disabled={isDisable || false}
              {...restOfProps}
              defaultValue={defaultValue}
            />
          ) : (
            <input
              className={`${customPlaceholder && style.customPlaceholder} ${input && input
                }`}
              style={{
                border: errorMessage
                  ? '1px solid #ff5050'
                  : '1px solid #E2E2EA',
                backgroundColor: readOnly ? '' : isDisable ? '#eeeeeeab' : '',
              }}
              id={id ? id : 'inputId'}
              min={min && min}
              max={max && max}
              name={name}
              step={step && step}
              value={value}
              onChange={onChange}
              type={type}
              placeholder={placeholder}
              ref={register}
              readOnly={readOnly || false}
              disabled={isDisable || false}
              {...restOfProps}
              defaultValue={defaultValue}
            />
          )}
          {icon && (
            <div
              style={{
                width: '42px',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
              className={`${style.icon} ${iconClass}`}
            >
              <Image
                style={{ cursor: 'pointer' }}
                src={icon}
                alt=""
                onClick={onClick}
              />
            </div>
          )}
          {required && <div className={style.required}>Required</div>}
        </div>
        {(errorMessage || customValidation) && (
          <span className={style.errorMessage}>
            {errorMessage || customValidation}
          </span>
        )}
      </div>
    </>
  )
}

export default TextField
