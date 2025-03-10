import React, { useState, useEffect } from "react";
import announcementLanding from "../../assets/announcementLanding.svg";
import "./ProfilePage.css"; // Import CSS

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    tagline: "",
    description: "",
    industry: "",
    location: "",
    companySize: "",
    yearEstablished: "",
    website: "",
    socialMedia: "",
    contactInfo: "",
  });

  const [logo, setLogo] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [gstCertificate, setGstCertificate] = useState(null);
  const [itReturn, setItReturn] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const allFieldsFilled =
      Object.values(formData).every((value) => value.trim() !== "") &&
      logo &&
      coverImage &&
      gstCertificate &&
      itReturn;
    setIsFormValid(allFieldsFilled);
  }, [formData, logo, coverImage, gstCertificate, itReturn]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e, setter) => {
    setter(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData, {
      logo,
      coverImage,
      gstCertificate,
      itReturn,
    });
  };

  return (
    <div className="profile-container">
      {/* Static Image Section */}
      <div className="image-section">
        <img src={announcementLanding} alt="Company Branding" />
      </div>

      {/* Scrollable Form Section */}
      <div className="form-container">
        <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "22px", fontWeight: "500" }}>
          Company Registration Form
        </h2>
        <form onSubmit={handleSubmit}>
          {[
            { label: "Company Name", name: "companyName", type: "text", placeholder: "Enter company name" },
            { label: "Tagline or Slogan", name: "tagline", type: "text", placeholder: "Enter tagline" },
            { label: "Company Description", name: "description", type: "textarea", placeholder: "Describe the company" },
            { label: "Industry & Specializations", name: "industry", type: "text", placeholder: "Enter industry" },
            { label: "Headquarters/Location", name: "location", type: "text", placeholder: "Enter location" },
            { label: "Company Size", name: "companySize", type: "number", placeholder: "Number of employees" },
            { label: "Year Established", name: "yearEstablished", type: "number", placeholder: "Enter year" },
            { label: "Website URL", name: "website", type: "url", placeholder: "Enter website link" },
            { label: "Social Media Links", name: "socialMedia", type: "url", placeholder: "Enter social media links" },
            { label: "Contact Information", name: "contactInfo", type: "text", placeholder: "Enter contact details" },
          ].map((field, index) => (
            <div key={index} className="input-group">
              <label>{field.label}</label>
              {field.type === "textarea" ? (
                <textarea name={field.name} value={formData[field.name]} onChange={handleChange} placeholder={field.placeholder} required />
              ) : (
                <input type={field.type} name={field.name} value={formData[field.name]} onChange={handleChange} placeholder={field.placeholder} required />
              )}
            </div>
          ))}

          {/* File Uploads */}
          <div className="input-group">
            <label>Logo</label>
            <input type="file" className="file-input" onChange={(e) => handleFileChange(e, setLogo)} required />
          </div>

          <div className="input-group">
            <label>Cover Image</label>
            <input type="file" className="file-input" onChange={(e) => handleFileChange(e, setCoverImage)} required />
          </div>

          <div className="input-group">
            <label>GST Certificate</label>
            <input type="file" className="file-input" onChange={(e) => handleFileChange(e, setGstCertificate)} required />
          </div>

          <div className="input-group">
            <label>IT Returns (Last Financial Year)</label>
            <input type="file" className="file-input" onChange={(e) => handleFileChange(e, setItReturn)} required />
          </div>

          <button type="submit" disabled={!isFormValid} className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
