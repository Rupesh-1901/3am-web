import { ErrorMessage, Field } from "formik";
import React from "react";
import { Label, Radio } from "./RadioGroupInput/InputStyles";
import { TextError } from "./TextError";
import { TextAreaCustom } from "./TextAreaCustom";

export const FormRadioCustomReward = (props) => {
  const { name, flexstyle, editstyle, options, ...rest } = props;

  return (
    <div
      className="radioFormik  formikComponentContainer w-100"
      style={editstyle}
    >
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            // console.log("field", field, field?.value, option?.id);

            return (
              <div
                style={
                  flexstyle === "directiondown"
                    ? { width: "100%" }
                    : { display: "flex", alignItems: "center", width: "100%" }
                }
              >
                <Radio
                  id={option.value}
                  type="radio"
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                  {...props}
                />
                <Label
                  htmlFor={option.value}
                  style={{
                    cursor: "pointer",
                    fontSize: "13px",
                    color: " var(--people-sol-dark-grey, #555)",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    width: "100%",
                    lineHeight: "17px",
                  }}
                >
                  {option.label}
                </Label>
                <TextAreaCustom
                  maxLength={450}
                  name="position"
                  type="text"
                  placeholder="Type here"
                />
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage
        name={name}
        component={TextError}
        styles={{ bottom: "-10px", left: "-10px" }}
      />
    </div>
  );
};
// font-style: normal;
// font-weight: 400;
// line-height: 17.32px;
// letter-spacing: 0.24px;
