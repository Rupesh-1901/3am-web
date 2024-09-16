import { useEffect } from "react";
import DatePicker from "react-datepicker";

export const DateRangePick = (props) => {
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
					minDate={selectedStart}
				/>
			</div>
		</div>
	);
};
