import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Timeicon from "./Timeicon";
import { useEffect } from "react";
export default function TimeCustoms({ field, form, ampm, disabled }) {
  const [open, setOpen] = React.useState(false);
  useEffect(() => {}, [field.value]);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        disabled={disabled}
        ampmInClock={false}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        className="time"
        ampm={ampm}
        components={{
          OpenPickerIcon: Timeicon,
        }}
        InputProps={{
          disableUnderline: true,
        }}
        value={field?.value}
        onChange={(newValue) => {
          form?.setFieldValue(field?.name, newValue?.$d);
        }}
        renderInput={({ inputProps, ...restParams }) => {
          return (
            <TextField
              variant="standard"
              id="input-time"
              format="HH:mm:ss"
              {...restParams}
              inputProps={{
                ...inputProps,
                placeholder: "hh:mm",
              }}
              onClick={(e) => setOpen(true)}
            />
          );
        }}
      />
    </LocalizationProvider>
  );
}

export { TimeCustoms };
