import { ChangeEvent, useEffect, useState, useRef } from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";

import Tags from "../tags/index";
import TextField from "../textfield/index";

import icon from "../../assets/select-arrow.svg";

import { SelectionStyle } from "./custom-styles";

import style from "./select.module.scss";
import Button from "../button/index";
import Image from "next/image";

const Selection = ({
  placeholder1,
  colorDot,
  backStyle,
  label,
  options,
  errorMessage,
  inputErrorMessage,
  star,
  numberOnly,
  wraperSelect,
  handleInputChange,
  placeholder,
  closeMenuOnSelect,
  isMulti,
  name,
  control,
  isDisabled,
  defaultValue,
  placeHolderStyle,
  showNumber,
  propChange,
  getStates,
  getCities,
  currentCountryData,
  permanentCountryData,
  permanentCountryDataa,
  permanentCitiesData,
  getDataLabel,
  getCitiesLabel,
  changeHandler,
  setType,
  newSelect,
  userId,
  withInput,
  name1,
  register,
  marksType,
  backClass,
  marksVal,
  imgStyle,
  valuePag,
  menuPlacement,
  widthClass,
  inputBackClass,
  placeholderSize,
  backInput,
  crossClass,
  isPrice,
  inputValue,
  id,
  text,
}) => {
  const [customErr, setCustomErr] = useState(undefined);
  const [open, setOpen] = useState(false);
  const [test, setTest] = useState(false);

  const ref = useRef();

  useEffect(() => {
    if (marksType?.value === "percentage") {
      if (marksVal > 100) {
        setCustomErr("Percentage should be less than 100%");
      } else setCustomErr("");
    } else if (marksType?.value === "cgpa") {
      if (marksVal > 4) {
        setCustomErr("CGPA should be less than or equal to 4");
      } else setCustomErr("");
    }
  }, [marksType, marksVal]);

  const CustomStyle = SelectionStyle;

  if (placeHolderStyle) {
    CustomStyle.placeholder = (styles) => ({
      ...styles,
      fontSize: "13px",
      color: placeHolderStyle.color,
      ...(placeHolderStyle?.fontSize && {
        fontSize: placeHolderStyle?.fontSize,
      }),
    });
  }

  const formatOptionLabel = (
    { label, color, dotColor },
    { context, selectValue }
  ) => {
    return (
      <div>
        {context === "label" ? (
          <div>{label}</div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              ...(context === "menu" &&
                selectValue?.some((el) => el?.label === label) && {
                color: "black",
              }),
            }}
          >
            {colorDot && (
              <div
                style={{
                  backgroundColor: dotColor,
                  height: "10px",
                  width: "10px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              ></div>
            )}
            {color && (
              <div
                className={style.label}
                style={{
                  background: color,
                }}
              />
            )}
            {label}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <div className={style.text}>
        {text && (<p className={style.para}>{text}</p>)}
        <div
          style={{ position: "relative", flex: '1', width: "100%" }}
          className={widthClass}
          id="scrollContainer"
        >
          {label && (
            <label className={style.label}>
              {label}
              <b>{star}</b>
            </label>
          )}
          <div
            style={{
              border:
                errorMessage || inputErrorMessage
                  ? "1px solid #ff5050"
                  : "1px solid #E2E2EA",
              borderRadius: "6px",
              textAlign: "left",
              marginTop: "calc(5px + (7 - 5) * (100vw - 280px) / (2560 - 280))",
              height: "calc(30px + (50 - 30) * (100vw - 280px) / (2560 - 280))",
            }}
            className={`${backClass} ${wraperSelect}`}
          >
            <Controller
              name={name}
              control={control}
              defaultValue={defaultValue}
              render={({ onChange: handleChange, value }) => {
                return (
                  <>
                    <Select
                      id={id ? id : "selectId"}
                      ref={ref}
                      onInputChange={(e) => {
                        handleInputChange && handleInputChange(e);
                      }}
                      closeMenuOnScroll={(e) => {
                        const parent = e?.target?.parentElement;
                        if (parent && parent.className.endsWith("-menu")) {
                          return false;
                        } else {
                          return true;
                        }
                      }}
                      menuPlacement={menuPlacement ? menuPlacement : "auto"}
                      components={{
                        DropdownIndicator: () => (
                          <Image
                            src={icon}
                            alt=""
                            style={imgStyle}
                            className={style.imgDropDown}
                          />
                        ),
                        GroupHeading: (e) => (
                          <div
                            onClick={() => {
                              const set = new Set([
                                ...(value || ""),
                                ...e.data.options,
                              ]);
                              handleChange([...set]);
                            }}
                          >
                            <p className={style.groupHeading}>
                              {e?.children?.charAt(0)?.toUpperCase() +
                                e?.children?.slice(1)}
                            </p>
                          </div>
                        ),

                        ...(showNumber && {
                          MultiValue: (props) => {
                            const { getValue, data } = props;
                            const selectedOptions = getValue();
                            const currentOptionIdx = selectedOptions.findIndex(
                              (option) => option?.value === data?.value
                            );
                            if (selectedOptions.length > 1) {
                              return currentOptionIdx === 0 ? (
                                <>
                                  <Tags
                                    text={`+ ${selectedOptions.length} more`}
                                    boxColor={"#F0F0F0"}
                                    textColor={"#2d2d32"}
                                    className={style.nameTag}
                                  />
                                </>
                              ) : null;
                            } else {
                              return currentOptionIdx === 0 ? (
                                <Tags
                                  text={data?.label}
                                  className={style.nameTag}
                                  boxColor={"#F0F0F0"}
                                  textColor={"#2d2d32"}
                                />
                              ) : (
                                <></>
                              );
                            }
                          },
                        }),
                      }}
                      hideSelectedOptions={false}
                      closeMenuOnSelect={closeMenuOnSelect}
                      isMulti={isMulti}
                      value={value}
                      onChange={(e) => {
                        setType && setType(e?.value);
                        changeHandler && changeHandler(e?.value);
                        propChange && propChange({ country: e.label });
                        getStates &&
                          getStates(`${getDataLabel}`, {
                            country: e.label,
                          });
                        getCities &&
                          getCities(
                            `${getCitiesLabel}`,
                            currentCountryData && currentCountryData,
                            e.label
                          );
                        permanentCountryData &&
                          permanentCountryData("permanentCountryData", {
                            country: e?.label,
                          });
                        permanentCitiesData &&
                          permanentCitiesData(
                            "permanentCitiesData",
                            permanentCountryDataa,
                            e.label
                          );
                        handleChange && handleChange(e);
                      }}
                      options={options}
                      styles={{
                        menuPortal: (defaultStyles) => ({
                          ...defaultStyles,
                          zIndex: 5000,
                        }),

                        control: (styles, state) => ({
                          ...styles,
                          backgroundColor: "transparent",
                          borderRadius: 6,
                          boxShadow: "none",
                          border: "transparent !important",
                          fontSize:
                            "calc(13px + (15 - 13) * (100vw - 280px) / (2560 - 280)) !important",
                          minHeight:
                            "calc(25px + (45 - 25) * (100vw - 280px) / (2560 - 280))",
                          paddingLeft:
                            "calc(2px + (7 - 2) * (100vw - 280px) / (2560 - 280)) !important",
                          paddingRight:
                            "calc(2px + (7 - 2) * (100vw - 280px) / (2560 - 280)) !important",
                          borderColor: "none !important",
                          cursor: "pointer",
                          height:
                            "calc(25px + (45 - 25) * (100vw - 280px) / (2560 - 280))",
                          ...backStyle,
                          "&:hover": {
                            outline: state.isFocused ? 0 : 0,
                          },
                        }),

                        // option: (
                        //   styles,
                        //   { data, isDisabled, isFocused, isSelected }
                        // ) => {
                        //   const selectedStyles = isSelected
                        //     ? {
                        //       backgroundColor: '#FF4A57',
                        //       color: 'white',
                        //     }
                        //     : {};

                        //   return {
                        //     ...styles,
                        //     backgroundColor: 'white',
                        //     color: 'black',
                        //     cursor: isDisabled ? 'not-allowed' : 'pointer',
                        //     '&:hover': {
                        //       backgroundColor: '#ccc',
                        //       color: 'white',
                        //     },
                        //     '&:focus': {
                        //       backgroundColor: '#ffd4d1',
                        //       color: 'white',
                        //     },
                        //     '&:active': {
                        //       backgroundColor: '#ffd4d1',
                        //       color: 'white',
                        //     },
                        //     ...selectedStyles,
                        //   };
                        // },

                        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
                          return {
                            ...styles,
                            backgroundColor: isSelected ? '#ffd4d1' : isFocused ? '#FCECEC' : 'white',
                            color: isSelected ? 'white' : data.color,
                            fontSize: 'calc(13px + (15 - 13) * (100vw - 280px) / (2560 - 280)) !important',
                            cursor: isDisabled ? 'not-allowed' : 'pointer',
                            '&:active': {
                              backgroundColor: 'white',
                            },
                            '&:hover': {
                              backgroundColor: isSelected ? '' : '#FCECEC',
                              color: isSelected ? 'white' : data.color,
                            },
                          };
                        },

                        placeholder: (styles) => ({
                          ...styles,
                          fontSize:
                            "calc(13px + (15 - 13) * (100vw - 280px) / (2560 - 280)) !important",
                          color: "black",
                          fontWeight: "400 !important",
                          textTransform: "capitalize",
                          ...placeholderSize,
                        }),
                        container: (base) => ({
                          ...base,
                        }),
                        clearIndicator: (provided) => ({
                          ...provided,
                          padding: "0px",
                          ...crossClass,
                        }),

                        valueContainer: (provided) => ({
                          ...provided,

                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          height:
                            "calc(30px + (52 - 30) * (100vw - 280px) / (2560 - 280)) !important",
                          flexWrap: "wrap",
                          ...valuePag,
                        }),
                        input: (provided) => ({
                          ...provided,
                          minWidth: "20%",
                          ...inputBackClass,
                        }),
                        singleValue: (styles) => ({
                          ...styles,
                          ...backInput,
                        }),
                        indicatorSeparator: (styles) => ({
                          ...styles,
                          width: "0px !important",
                        }),
                      }}
                      placeholder={placeholder}
                      isDisabled={isDisabled || false}
                      formatOptionLabel={(data, metaData) =>
                        formatOptionLabel(data, metaData, true)
                      }
                      isSearchable={true}
                      onMenuOpen={() => {
                        setOpen(true);
                        setTest(true);
                      }}
                      onMenuClose={() => setOpen(false)}
                    />
                    {newSelect && <p className={style.labelClass1}>{userId}</p>}
                    {withInput && (
                      <div className={style.textFieldContainer}>
                        <TextField
                          isPrice={isPrice}
                          isDisable={isDisabled}
                          errorMessage={!errorMessage && inputErrorMessage}
                          star={" *"}
                          type={numberOnly ? "number" : "text"}
                          name={name1}
                          value={userId && userId}
                          selectedValue={inputValue}
                          register={register}
                          className={style.inputClass}
                          placeholder={
                            placeholder1 ? placeholder1 : "Select Employee ID "
                          }
                        />
                      </div>
                    )}
                  </>
                );
              }}
            />
          </div>
          {customErr && <span className={style.errorMessage}>{customErr}</span>}
          {!customErr
            ? errorMessage && (
              <span className={style.errorMessage}>{errorMessage}</span>
            )
            : ""}
        </div>
      </div>
    </>
  );
};

export default Selection;
