import React from "react";
import { useDropzone } from "react-dropzone";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import "./UploadComponent.css";
import { useEffect } from "react";
export const UploadComponent = (props) => {
  const { field, form } = props;
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop: (acceptedFiles) => {
        form?.setFieldValue(field.name, acceptedFiles[0]);
      },
      multiple: props.multiple,
      maxFiles: 3,
    });
  const files = acceptedFiles.map((file, index) => (
    <div key={index}>
      • {file.path.slice(0, 12)}, {(file.size / 1024).toFixed(1)} KBs
    </div>
  ));

  // useEffect(()=>{
  //   document.title = `PeopleSol - Upload component`;
  //   return () => {
  //     document.title = 'PeopleSol';
  //   };
  // })

  return (
    <div
      {...getRootProps({ className: "dropzone" })}
      style={{ cursor: "pointer" }}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <div className="uploadContainer">
          <FileUploadOutlinedIcon
            fontSize="large"
            style={{ color: "#1296B0" }}
          />
          <p className="textU">Drop files here...</p>
        </div>
      ) : (
        <div
          className={
            files.length > 0 ? "uploadContainer uploaded" : "uploadContainer"
          }
        >
          {files.length > 0 ? (
            <EditOutlinedIcon fontSize="medium" style={{ color: "#1296B0" }} />
          ) : (
            <FileUploadOutlinedIcon
              fontSize="medium"
              style={{ color: "#1296B0" }}
            />
          )}
          {files.length > 0 ? (
            <>{files}</>
          ) : (
            <p className="textU">Select/Drop files</p>
          )}
        </div>
      )}
    </div>
  );
};
