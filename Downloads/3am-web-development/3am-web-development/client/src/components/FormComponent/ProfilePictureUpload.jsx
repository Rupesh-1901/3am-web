import React, { useState, useRef } from "react";
import { IconButton } from "@mui/material";
import Camera from "../../Assets/Camera.svg";
import { getRequest, postRequestForm } from "../../Services/axios";
import { setEmployeeData } from "../../Features/AuthSlice";
import { useDispatch } from "react-redux";
import { showToast } from "../../Features";

const ProfilePictureUpload = ({getProfileData, setSelectedFile}) => {
    const dispatch=useDispatch()
  const fileInputRef = useRef(null); // Create a ref for the file input
  const getEmployeeData = async () => {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("userType") === "emp"
    ) {
      try {
        const result = await getRequest("Employees/GetEmployeedata");
        if (result) dispatch(setEmployeeData(result?.data?.data));
      } catch (error) {
      } finally {
        getProfileData()
      }
    }
  };
  const handleFileChange = async (event) => {

    const file = event.target.files[0];
    setSelectedFile(file);
    let result;
    try {
      // Upload the selected file using your API
      if (event.target.files[0]) {
        result = await postRequestForm(
          "Employees/UploadProfilePicture",
          {profilePicture:event.target.files[0]}
        );
      }

      // Assuming the API returns the URL of the uploaded image
      if (result ) {
        getEmployeeData()
         
        // You may also want to update the user's profile data in your app state.
        dispatch(
            showToast({ text: result?.data, severity: "success" })
          )
        }
     }
      catch (error) {
          dispatch(
            showToast({ text: error?.response?.data, severity: "error" })
          ); }
    finally{
        
    }
  };
  //   const handleUpload = async () => {
  //    // console.log("selectedFile", selectedFile);
  //     if (selectedFile) {
  //       try {
  //         // Upload the selected file using your API
  //         const result = await postRequestForm(
  //           "Employees/UploadProfilePicture",
  //           selectedFile
  //         );

  //         // Assuming the API returns the URL of the uploaded image
  //         if (result && result.imageUrl) {
  //           setUploadedImage(result.imageUrl);
  //           // You may also want to update the user's profile data in your app state.
  //         }
  //       } catch (error) {
  //         console.error("Error uploading profile picture:", error);
  //       }
  //     }
  //   };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
        ref={fileInputRef}
      />
      <IconButton onClick={() => fileInputRef.current.click()}>
        {" "}
        {/* Use the ref to trigger file input click */}
        <img style={{zIndex:1}} src={Camera} alt="Camera Icon" />
      </IconButton>
    </div>
  );
};

export default ProfilePictureUpload;
