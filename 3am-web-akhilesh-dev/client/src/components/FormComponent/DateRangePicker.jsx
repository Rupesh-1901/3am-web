import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./FormComponent.css";
import { useEffect } from "react";

export const DateRangePicker = (props) => {
  const {
    selectedEnd,
    onChangeEnd,
    onChangeStart,
    selectedStart,
    valuesstart,
    valuesend,
  } = props;
 
  return (
    <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
      <div style={{ flexGrow: "1" }}>
        <DatePicker
          {...props}
          dateFormat="dd/MM/yyyy"
          selected={selectedStart}
          onChange={onChangeStart}
          maxDate={selectedEnd ? selectedEnd : new Date()}
          value={valuesstart}
          showYearDropdown={"true"}
          placeholderText="Select from date"
          dropdownMode={"select"}
        />
      </div>
      :
      <div style={{ flexGrow: "1" }}>
        <DatePicker
          {...props}
          showYearDropdown={"true"}
          placeholderText="Select to date"
          dropdownMode={"select"}
          dateFormat="dd/MM/yyyy"
          selected={selectedEnd}
          onChange={onChangeEnd}
          value={valuesend}
          maxDate={new Date()}
          minDate={selectedStart}
        />
      </div>
    </div>
  );
};
