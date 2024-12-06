import { ChromePicker } from "react-color";
import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const ColorFormik = ({ field, form }) => {
  const [color, setColor] = useState("var(--primary)");
 
  useEffect(() => {
    if (field.value) if (field.value !== "") setColor(form.values[field.name]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.value]);
  const [showPicker, setShowPicker] = useState(false);
  const myRef = useRef();
  const handleClickOutside = (e) => {
    if (!myRef?.current?.contains(e.target)) {
      setShowPicker(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
  return (
    <div ref={myRef}>
      <div
        style={{
          margin: "12px",
          padding: "12px",
          height: "40px",
          borderRadius: "4px",
          backgroundColor: color,
        }}
        onClick={() => setShowPicker((prev) => !prev)}
      ></div>
      {showPicker && (
        <>
          <ChromePicker
            color={color}
            onChange={(color) => {
              form.setFieldValue(field.name, color.hex);
              setColor(color.hex);
            }}
          />
        </>
      )}
    </div>
  );
};
export { ColorFormik };
