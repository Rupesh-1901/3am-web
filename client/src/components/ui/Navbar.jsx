/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/ui/Navbar.jsx

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import OutsideClickHandler from "./OutsideClickHandler"; // Ensure this component is correctly implemented
import companyLogo from "../../assets/companyLogo.svg";

const Navbar = ({ language = "English", setLanguage }) => {
  // Set default language to "English"

  const location = useLocation();
  const navigate = useNavigate();

  const [navContents, setNavContents] = useState([
    {
      id: 0,
      name: "Home",
      isActive: false,
      isDropdown: false,
      dropdown: [],
      clickAction: () => navigate("/home"),
    },
    {
      id: 1,
      name: "Find Job",
      isActive: false,
      isDropdown: false,
      dropdown: [],
      clickAction: () => navigate("/home"),
    },
    {
      id: 2,
      name: "Employers",
      isActive: false,
      isDropdown: true,
      dropdown: [
        {
          id: 0,
          name: "Post Job",
          isActive: true,
          clickAction: () => navigate("/provider/create-job-post"),
        },
        {
          id: 1,
          name: "View Applicants",
          isActive: true,
          clickAction: () => navigate("/provider/view-applicants"),
        },
        {
          id: 2,
          name: "Profile",
          isActive: true,
          clickAction: () => navigate("/provider/profile"),
        },
      ],
      clickAction: () => {}, // Will handle dropdown toggle separately
    },
    {
      id: 3,
      name: "Customer Support",
      isActive: true,
      isDropdown: false,
      dropdown: [],
      clickAction: () => navigate("/home"),
    },
  ]);

  const [tabIndex, setTabIndex] = useState(0);
  const [openLanguageDropdown, setOpenLanguageDropdown] = useState(false);
  const [isEmployersDropdownOpen, setIsEmployersDropdownOpen] = useState(false);

  // Translation data
  const translations = {
    English: {
      home: "Home",
      findjob: "Find Job",
      employers: "Employers",
      customersupport: "Customer Support",
      postjob: "Post Job",
      viewapplicants: "View Applicants",
      profile: "Profile",
      language: "Language",
    },
    Arabic: {
      home: "الصفحة الرئيسية",
      findjob: "ابحث عن وظيفة",
      employers: "أرباب العمل",
      customersupport: "دعم العملاء",
      postjob: "نشر وظيفة",
      viewapplicants: "عرض المتقدمين",
      profile: "الملف الشخصي",
      language: "اللغة",
    },
  };

  // Safely access the current translations
  const currentTranslations = translations[language] || translations["English"];

  console.log("Current Translations:", currentTranslations);
  console.log("Home Translation:", currentTranslations.home);

  useEffect(() => {
    if (location?.pathname === "/landing") {
      setNavContents((prev) =>
        prev?.map((it) => {
          if (it?.name === "Customer Support") {
            return {
              ...it,
              isActive: true,
            };
          } else {
            return {
              ...it,
              isActive: false,
            };
          }
        })
      );
    } else {
      setNavContents((prev) =>
        prev?.map((it) => {
          return {
            ...it,
            isActive: true,
          };
        })
      );
    }
  }, [location?.pathname]);

  const handleTabChange = (newTabIndex, click) => {
    setTabIndex(newTabIndex);
    click();
  };

  // Function to toggle Employers dropdown
  const toggleEmployersDropdown = () => {
    setIsEmployersDropdownOpen((prev) => !prev);
  };

  // Function to toggle Language dropdown
  const toggleLanguageDropdown = () => {
    setOpenLanguageDropdown((prev) => !prev);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "white",
        boxShadow: "0px -1.08px 0px 0px #E4E5E8 inset",
        width: "100%",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Navigation Tabs */}
      <div style={{ display: "flex", gap: "30px" }}>
        {navContents
          ?.filter((it) => it?.isActive)
          ?.map((item, index) => (
            <div
              key={item?.id}
              onClick={() => {
                if (item?.isDropdown) {
                  toggleEmployersDropdown();
                } else {
                  handleTabChange(index, item?.clickAction);
                }
              }}
              style={{
                position: "relative",
                fontFamily: "Inter, sans-serif",
                fontSize: "15.12px",
                fontWeight: 400,
                lineHeight: "21.6px",
                textTransform: "none",
                cursor: "pointer",
                color:
                  language === "Arabic"
                    ? "#000"
                    : tabIndex === index
                    ? "#1890ff"
                    : "#000",
                padding: "5px 0px",
                userSelect: "none",
              }}
            >
              <span>
                {currentTranslations[
                  item?.name.toLowerCase().replace(" ", "")
                ] || item?.name}
              </span>

              {/* Dropdown for Employers */}
              {item?.isDropdown && isEmployersDropdownOpen && (
                <OutsideClickHandler
                  onOutsideClick={() => {
                    setIsEmployersDropdownOpen(false);
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "30px",
                      left: language === "Arabic" ? "auto" : "0",
                      right: language === "Arabic" ? "0" : "auto",
                      backgroundColor: "white",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      borderRadius: "8px",
                      padding: "10px 0",
                      zIndex: 1000,
                      minWidth: "150px",
                      textAlign: language === "Arabic" ? "left" : "left",
                    }}
                  >
                    {item?.dropdown
                      ?.filter((it) => it?.isActive)
                      ?.map((it) => (
                        <div
                          key={it?.id}
                          onClick={(e) => {
                            it?.clickAction();
                            setIsEmployersDropdownOpen(false); // Close dropdown after selection
                            e.stopPropagation();
                          }}
                          style={{
                            padding: "10px 20px",
                            cursor: "pointer",
                            color: "#555",
                            fontSize: "14px",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            justifyContent:
                              language === "Arabic"
                                ? "flex-end" // Arabic alignment
                                : "flex-start",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#f5f5f5";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "white";
                          }}
                        >
                          {currentTranslations[
                            it?.name.toLowerCase().replace(" ", "")
                          ] || it?.name}
                        </div>
                      ))}
                  </div>
                </OutsideClickHandler>
              )}
            </div>
          ))}
      </div>

      {/* Navbar Actions */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {/* Language Selector */}
        <div
          style={{
            position: "relative",
            cursor: "pointer",
            borderLeft: "none",
          }}
          onClick={toggleLanguageDropdown}
          aria-label="Select Language"
        >
          {/* Dropdown Toggle Icon */}
          <svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <path
              d="M1.02955 1.68896L6.43059 7.09001L11.8316 1.68896"
              stroke="#9199A3"
              strokeWidth="1.62031"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Selected Language Display */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 40px 10px 10px", // Padding-right to accommodate the icon
              border: "1px solid #ccc",
              borderRadius: "8px",
              backgroundColor: "#fff",
              minWidth: "150px",
              justifyContent: "flex-start",
            }}
          >
            <img
              src={
                language === "English"
                  ? "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Oman.svg/383px-Flag_of_Oman.svg.png"
              }
              alt={`${language} Flag`}
              style={{
                width: "20px",
                height: "15px",
                objectFit: "cover",
              }}
            />
            <span style={{ fontSize: "14px", color: "#333" }}>
              {currentTranslations.language}
            </span>
          </div>

          {/* Dropdown Menu */}
          {openLanguageDropdown && (
            <OutsideClickHandler
              onOutsideClick={() => {
                setOpenLanguageDropdown(false);
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  backgroundColor: "white",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  borderRadius: "8px",
                  marginTop: "5px",
                  zIndex: 1000,
                  width: "150px",
                  textAlign: "left",
                }}
              >
                {[
                  {
                    name: "English",
                    flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
                  },
                  {
                    name: "Arabic",
                    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Oman.svg/383px-Flag_of_Oman.svg.png",
                  },
                ].map((lang) => (
                  <div
                    key={lang.name}
                    onClick={() => {
                      setLanguage(lang.name); // **Use setLanguage from props**
                      setOpenLanguageDropdown(false);
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "10px 20px",
                      cursor: "pointer",
                      fontSize: "14px",
                      color: "#555",
                      justifyContent:
                        lang.name === "Arabic"
                          ? "flex-start" // Arabic alignment
                          : "flex-start",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#f5f5f5";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "white";
                    }}
                  >
                    <img
                      src={lang.flag}
                      alt={`${lang.name} Flag`}
                      style={{
                        width: "20px",
                        height: "15px",
                        objectFit: "cover",
                      }}
                    />
                    <span>{lang.name}</span>
                  </div>
                ))}
              </div>
            </OutsideClickHandler>
          )}
        </div>

        {/* Additional Navbar Actions (e.g., profile, notifications) can be added here */}
      </div>
    </div>
  );
};

export default Navbar;
