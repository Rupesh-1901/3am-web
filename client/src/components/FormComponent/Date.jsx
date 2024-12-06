import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./FormComponent.css";
import { IconButton } from "@mui/material";
import { useRef } from "react";
import { useEffect } from "react";
const IconComponent = () => (
  <i>
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.1874 16.3907C19.1874 18.0475 17.8442 19.3907 16.1874 19.3907H3.63178C2.28303 19.3907 1.29395 18.3106 1.29395 17.0506V5.44039C1.29395 4.09036 2.37294 3.10034 3.63178 3.10034H16.8495C18.1983 3.10034 19.1874 4.18036 19.1874 5.44039V16.3907Z"
        stroke="#1296B0"
      />
      <path
        d="M5.61011 1.39062V4.72069"
        stroke="#1296B0"
        strokeLinecap="round"
      />
      <path
        d="M15.051 1.39062V4.72069"
        stroke="#1296B0"
        strokeLinecap="round"
      />
      <path d="M1.65356 7.33081H18.9176" stroke="#1296B0" />
      <path
        d="M4.17114 9.94067H6.23922"
        stroke="#F7941D"
        strokeLinecap="round"
      />
      <path
        d="M9.29688 9.94067H11.275"
        stroke="#F7941D"
        strokeLinecap="round"
      />
      <path
        d="M14.332 9.94067H16.4001"
        stroke="#F7941D"
        strokeLinecap="round"
      />
      <path
        d="M4.17114 13.271H6.23922"
        stroke="#F7941D"
        strokeLinecap="round"
      />
      <path
        d="M9.29688 13.2708H11.275"
        stroke="#F7941D"
        strokeLinecap="round"
      />
      <path
        d="M14.4385 13.2708H16.4166"
        stroke="#F7941D"
        strokeLinecap="round"
      />
      <path
        d="M4.17114 16.6008H6.23922"
        stroke="#F7941D"
        strokeLinecap="round"
      />
      <path
        d="M9.29688 16.6006H11.275"
        stroke="#F7941D"
        strokeLinecap="round"
      />
      <path
        d="M14.4385 16.6006H16.4166"
        stroke="#F7941D"
        strokeLinecap="round"
      />
    </svg>
  </i>
);
export const Date = (props) => {

  
  const { field, form } = props;
  const onChange = (date) => {
    form.setFieldValue(field.name, date);
  };

  const datepickerRef = useRef(null);
  function handleClickDatepickerIcon() {
    const datepickerElement = datepickerRef.current;
    datepickerElement.setFocus(true);
  }
  return (
    <div
      className="emailcustom formikComponentContainer"
      style={{ minWidth: "150px" }}
    >
      <DatePicker
        {...props}
        portalId="root-portal"
        autoComplete={"off"}
        showYearDropdown={"true"}
        dropdownMode={"select"}
        dateFormat={`${
          props.showTimeSelect ? "dd/MM/yyyy hh:mm a" : "dd/MM/yyyy"
        }`}
        selected={props?.selected !== undefined ? props.selected : field.value}
        placeholderText={props.placeholder ?? "Select Date"}
        name={field.name}
        ref={datepickerRef}
        onChange={(date) => onChange(date)}
      />
      <div className="iconButton">
        <IconButton onClick={() => handleClickDatepickerIcon()}>
          <IconComponent />
        </IconButton>
      </div>
    </div>
  );
};
