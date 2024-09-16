import React, { useState, useRef, useEffect } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { IconButton, Tooltip } from "@mui/material";

const EditableInput = (props) => {
  // We use hooks to declare "initial" states
  const inputRef = useRef(null);
  const [inputVisible, setInputVisible] = useState(false);
  const [text, setText] = useState(props.text);
  const [name, setName] = useState(props.text);

 

  function onClickOutside(e) {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setInputVisible(false);
      // Call the API using the callback function
      if (props.onApiCall) {
        props.onApiCall(inputRef.current);
      }
    }
  }



  useEffect(() => {
    // Handle outside clicks on mounted state
    if (inputVisible) {
      document.addEventListener("mousedown", onClickOutside);
    }

    // This is a necessary step to "dismount" unnecessary events when we destroy the component
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  });

  return (
    <React.Fragment>
      {inputVisible ? (
        <input
        className="input-shorttexts"
        {...props}
          ref={inputRef}
          name={name}
          id={props.id} // Set the Ref
          value={text} // Now input value uses local state
          onChange={(e) => {
            setText(e.target.value);
            setName(e.target.id)
          }}
        />
      ) : (
        <p  style={{ display:"flex",justifyContent:'space-between',alignItems:'center' }} {...props}  onClick={() => setInputVisible(true)}> <span>{text}</span> <Tooltip arrow title="Edit" ><IconButton><EditOutlinedIcon style={{ color: "#bfbfbf",fontSize:'13px' }} /></IconButton></Tooltip></p>
      )}
    </React.Fragment>
  );
};

export { EditableInput }; // We got our component!

