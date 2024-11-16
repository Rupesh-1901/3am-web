import { ErrorMessage, Field } from "formik";
import React from "react";
import { Label, Radio } from "./RadioGroupInput/InputStyles";
import { TextError } from "./TextError";

export const RadioRewardFormik = (props) => {
  const { name, editstyle, options, ...rest } = props;

  return (
    <div className="radioFormik  formikComponentContainer" style={editstyle}>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <label
                htmlFor={option.value}
                className="radioreward"
                style={{
                  display: "flex",
                  backgroundImage: `url(${option.images})`,
                  backgroundSize: "inherit",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Radio
                  id={option.value}
                  type="radio"
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                  {...props}
                />
              </label>
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
