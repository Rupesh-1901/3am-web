import React from "react";
// import "react-datepicker/dist/react-datepicker.css";
import "./FormComponent.css";
import '@sbmdkl/nepali-datepicker-reactjs/dist/index.css';
import Calendar from "@sbmdkl/nepali-datepicker-reactjs";
export const DatePicker = (props) => {
  const { field, form } = props;
  const { name } = field;

  // const [selectedDate, setSelectedDate] = useState(props.selected || field.value);




  return (
    <div  className="emailcustom formikComponentContainer" style={{ minWidth: "150px" }}>
      <Calendar
       portalId="root-portal"
       autoComplete={"off"}
       showYearDropdown={"true"}
       dropdownMode={"select"}
        {...props}
        value={field.value}
        placeholderText={props.placeholder || "Select Date"}
        name={name}
        onChange={(bsDate) => {
          // Update the local state
          form.setFieldValue(name, bsDate.adDate); // Update form field value
        }}
      />
    </div>
  );
};