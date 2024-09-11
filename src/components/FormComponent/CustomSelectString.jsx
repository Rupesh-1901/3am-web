import { useEffect, useState } from "react";
import Select from "react-select";
export const CustomSelectString = (props) => {
  const { placeholder, field, form, options, values } = props;
  const [finalValue, setFinalValue] = useState([]);
  const onChange = (option) => {
    const newArray = [];
    option?.map((item) => {
      return newArray.push(item.value);
    });
    const finalString = newArray?.join(",");
    form.setFieldValue(field.name, finalString);
  };

  useEffect(() => {
    if (field?.value) {
      setFinalValue(
        options?.filter((option) => {
          return (
            field?.value?.split(",")?.indexOf(option.value.toString()) >= 0
          );
        })
      );
    } else {
      setFinalValue([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field?.value]);
  // console.log("first finalValue finalValue", finalValue);
  return (
    <Select
      {...props}
      menuShouldBlockScroll={true}
      menuPortalTarget={document.body}
      color={"#1296b038"}
      className="react-select-container"
      classNamePrefix="react-select"
      options={options}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: "var(--primary-hover)",
          primary: "var(--primary)",
          primary50: "var(--primary-hover)",
        },
      })}
      isClearable={false}
      isSearchable
      name={field.name}
      values={values}
      value={finalValue}
      // value={values}
      onChange={onChange}
      placeholder={placeholder}
      isMulti={true}
    />
  );
};
export default CustomSelectString;
