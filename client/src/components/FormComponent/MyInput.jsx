export const MyInput = ({ field, value, form, ...props }) => {
  // console.log("val", value);
  return <input {...field} {...props} value={value ?? field.value} />;
};
