import { ErrorMessage, Field } from "formik";
import React from "react";
import { CheckBox, Label, Radio, YesNo } from "./RadioGroupInput/InputStyles";
import { TextError } from "./TextError";

export const YesNoFormik = (props) => {
  const { name, ...rest } = props;

  return (
    <>
      <div

      // style={{ background: "white", height: " 45px", borderRadius: " 6px" }}
      >
        <Field name={name} {...rest}>
          {({ field }) => {
            return (
              <div className="radioFormik" style={{ gap: "0px" }}>
                <YesNo
                  id={`${name}Yes`}
                  type="radio"
                  {...field}
                  value={"Yes"}
                  checked={field?.value?.includes("Yes")}
                  {...props}
                />
                <Label
                  htmlFor={`${name}Yes`}
                  className="cursor"
                  style={{ marginRight: "18px" }}
                >
                  <span>{"Yes"}</span>
                </Label>
                <YesNo
                  id={`${name}No`}
                  type="radio"
                  {...field}
                  value={"No"}
                  checked={field?.value?.includes("No")}
                  {...props}
                />
                <Label htmlFor={`${name}No`} className="cursor">
                  <span>{"No"}</span>
                </Label>
              </div>
            );
          }}
        </Field>
      </div>
      <ErrorMessage
        name={name}
        component={TextError}
        // styles={{ left: "-11px" }}
      />
    </>
  );
};
