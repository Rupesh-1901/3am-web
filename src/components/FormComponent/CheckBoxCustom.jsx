import { useEffect } from "react";
import { CheckBox } from "./RadioGroupInput/InputStyles";

const CheckBoxCustom = (props) => {
  const { label, value, id, disabled, onChange, name, isRadio } = props;
  return (
    <div className="WrapperCheck">
      <CheckBox
        value={value}
        type={isRadio ? "radio" : "checkbox"}
        disabled={disabled}
        {...props}
        onChange={onChange}
        name={name}
        id={id}
      />
      <label className="label-custom cursor" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export { CheckBoxCustom };
