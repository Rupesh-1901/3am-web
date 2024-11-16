import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoggoutPopup = () => {
  const navigate=useNavigate();
    const options = {
        title: 'Title',
        message: 'You Have Been Logged Out',
        closeOnEscape: true,
        closeOnClickOutside: true,
        keyCodeForClose: [8, 32],
        willUnmount: () => {},
        afterClose: () => {},
        onClickOutside: () => navigate('/login'),
        overlayClassName: "overlay-custom-class-name"
      };
  return (
    <div className="popuplogout"
    // onClick={()=> navigate("/login") }
    >
    <div className="popuplogout-content">
      <span>You have been logged out</span>
    </div>
  </div>
  )
}
