// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import createJobPostSvg from "../../assets/create_job_post_logo.svg"; // Importing the SVG
import "./provider.css";

const CreateJobPost = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [numOpenings, setNumOpenings] = useState("");
  const [area, setArea] = useState("");
  const [experience, setExperience] = useState("");
  const [monthlyInhand, setMonthlyInhand] = useState("");
  const [bonus, setBonus] = useState(""); // State to hold bonus selection
  const [jobDescription, setJobDescription] = useState(""); // State to hold job description
  const [contactOption, setContactOption] = useState(""); // State for contact option selection
  const [skills, setSkills] = useState(""); // State for skills selection
  const [preference, setPreference] = useState(""); // State for preference selection
  const [jobTiming, setJobTiming] = useState(""); // State for job timing selection
  const [interviewDetails, setInterviewDetails] = useState(""); // State for interview details selection
  const [companyName, setCompanyName] = useState(""); // State for company name
  const [organizationSize, setOrganizationSize] = useState(""); // State for organization size
  const [jobAddress, setJobAddress] = useState(""); // State for job address
  const [phoneNumber, setPhoneNumber] = useState(""); // State for phone number
  const [emailId, setEmailId] = useState(""); // State for email ID
  const [termsAccepted, setTermsAccepted] = useState(false); // State for terms and conditions acceptance

  // Add the options for Job Timing and Interview Details
  const jobTimingOptions = [
    "Full-time",
    "Part-time",
    "Internship",
    "Freelance",
  ]; // Example job timings
  const interviewDetailsOptions = ["In-person", "Online", "Phone"]; // Example interview methods

  // Handlers for dropdown selections
  const handleJobTimingChange = (event) => {
    setJobTiming(event.target.value); // Update the job timing state
  };

  const handleInterviewDetailsChange = (event) => {
    setInterviewDetails(event.target.value); // Update the interview details state
  };

  const jobLocations = ["New York", "San Francisco", "Los Angeles", "Chicago"]; // Example locations
  const areas = ["Finance", "Engineering", "Marketing", "HR"]; // Example areas
  const monthlyInhandOptions = [
    "$3000 - $5000",
    "$5000 - $7000",
    "$7000 - $9000",
    "$9000 - $12000",
  ]; // Example monthly ranges
  const bonusOptions = ["Yes", "No"]; // Bonus options for dropdown
  const skillOptions = ["JavaScript", "Python", "React", "Node.js", "Java"]; // Example skills

  const handleBonusSelection = (event) => {
    setBonus(event.target.value); // Update the bonus state based on the selected value
  };

  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value); // Update the job description state
  };

  const handleContactOptionChange = (option) => {
    setContactOption(option); // Update the contact option selected by the user
  };

  const handleSkillsChange = (event) => {
    setSkills(event.target.value); // Update the selected skills state
  };

  const handlePreferenceSelection = (preference) => {
    setPreference(preference); // Update the selected preference
  };

  return (
    <div className="job-post-container">
      {/* Left Section */}
      <div className="left-section">
        {/* <h2>Create Job Post</h2> */}

        {/* Inner Form Container */}
        <div className="form-container">
          {/* First Row: Job Title & Job Location */}
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                id="jobTitle"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="Job Title"
                className="input-shorttext"
                required
              />
            </div>

            <div className="form-group">
              <select
                id="jobLocation"
                value={jobLocation}
                onChange={(e) => setJobLocation(e.target.value)}
                className="input-shorttext"
                required
              >
                <option value="" disabled>
                  Job Location
                </option>
                {jobLocations.map((location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Second Row: Number of Openings */}
          <div className="form-row">
            <div className="form-group">
              <input
                type="number"
                id="numOpenings"
                value={numOpenings}
                onChange={(e) => setNumOpenings(e.target.value)}
                placeholder="Number of Openings"
                className="input-shorttext"
                required
              />
            </div>
          </div>

          {/* Third Row: Area */}
          <div className="form-row">
            <div className="form-group">
              <select
                id="area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="input-shorttext"
                required
              >
                <option value="" disabled>
                  Area
                </option>
                {areas.map((areaOption, index) => (
                  <option key={index} value={areaOption}>
                    {areaOption}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Fourth Row: Experience and Monthly In-hand */}
          <div className="form-row">
            <div className="form-group">
              <input
                type="number"
                id="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder="Experience (in years)"
                className="input-shorttext"
                required
              />
            </div>

            <div className="form-group">
              <select
                id="monthlyInhand"
                value={monthlyInhand}
                onChange={(e) => setMonthlyInhand(e.target.value)}
                className="input-shorttext"
                required
              >
                <option value="" disabled>
                  Monthly In-hand
                </option>
                {monthlyInhandOptions.map((range, index) => (
                  <option key={index} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Fifth Row: Monthly Bonuses */}
          <div className="form-row">
            <div className="form-group">
              <select
                id="bonus"
                value={bonus}
                onChange={handleBonusSelection}
                className="input-shorttext"
                required
              >
                <option value="" disabled>
                  Select Bonus Option
                </option>
                {bonusOptions.map((option, index) => (
                  <option key={index} value={option.toLowerCase()}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Sixth Row: Job Description */}
          <div className="form-row">
            <div className="form-group">
              <textarea
                id="jobDescription"
                value={jobDescription}
                onChange={handleJobDescriptionChange}
                placeholder="Enter job description"
                className="input-textarea"
                rows="4"
                required
              />
            </div>
          </div>

          {/* Seventh Row: Contact Options */}
          <div className="form-row-7th">
            <div className="form-group-7th">
              <div className="contact-option-text">
                <p>Candidates can contact you at?</p>
              </div>
              <div className="contact-options">
                <button
                  onClick={() => handleContactOptionChange("everyday")}
                  className={`contact-option-btn ${
                    contactOption === "everyday" ? "selected" : ""
                  }`}
                >
                  Everyday
                </button>
                <button
                  onClick={() => handleContactOptionChange("custom")}
                  className={`contact-option-btn ${
                    contactOption === "custom" ? "selected" : ""
                  }`}
                >
                  Custom
                </button>
              </div>
            </div>
          </div>

          {/* Eighth Row: Skills Dropdown */}
          <div className="form-row">
            <div className="form-group">
              <select
                id="skills"
                value={skills}
                onChange={handleSkillsChange}
                className="input-shorttext"
                required
              >
                <option value="" disabled>
                  Select Skills
                </option>
                {skillOptions.map((skill, index) => (
                  <option key={index} value={skill}>
                    {skill}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Ninth Row: Preferences Selection */}
          <div className="form-row-9th">
            <div className="form-group-9th">
              <div className="options-text">
                <p>Select Preferences:</p>
              </div>
              <div className="options-buttons">
                <button
                  onClick={() => handlePreferenceSelection("language")}
                  className={`option-btn ${
                    preference === "language" ? "selected" : ""
                  }`}
                >
                  Preferred Language
                </button>
                <button
                  onClick={() => handlePreferenceSelection("age")}
                  className={`option-btn ${
                    preference === "age" ? "selected" : ""
                  }`}
                >
                  Age
                </button>
                <button
                  onClick={() => handlePreferenceSelection("certification")}
                  className={`option-btn ${
                    preference === "certification" ? "selected" : ""
                  }`}
                >
                  Certification
                </button>
                <button
                  onClick={() => handlePreferenceSelection("specialization")}
                  className={`option-btn ${
                    preference === "specialization" ? "selected" : ""
                  }`}
                >
                  Specialization
                </button>
              </div>
            </div>
          </div>
          <div className="form-row">
            {/* Job Timing Dropdown */}
            <div className="form-group">
              <select
                id="jobTiming"
                value={jobTiming}
                onChange={handleJobTimingChange}
                className="input-shorttext"
                required
              >
                <option value="" disabled>
                  Select Job Timing
                </option>
                {jobTimingOptions.map((timing, index) => (
                  <option key={index} value={timing}>
                    {timing}
                  </option>
                ))}
              </select>
            </div>

            {/* Interview Details Dropdown */}
            <div className="form-group">
              <select
                id="interviewDetails"
                value={interviewDetails}
                onChange={handleInterviewDetailsChange}
                className="input-shorttext"
                required
              >
                <option value="" disabled>
                  Select Interview Method
                </option>
                {interviewDetailsOptions.map((method, index) => (
                  <option key={index} value={method}>
                    {method}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-row">
            {/* Company Name Field */}
            <div className="form-group">
              <input
                type="text"
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Company Name"
                className="input-shorttext"
                required
              />
            </div>

            {/* Size of Organization Dropdown */}
            <div className="form-group">
              <select
                id="organizationSize"
                value={organizationSize}
                onChange={(e) => setOrganizationSize(e.target.value)}
                className="input-shorttext"
                required
              >
                <option value="" disabled>
                  Size of Organization
                </option>
                <option value="Small">Small (1-50 employees)</option>
                <option value="Medium">Medium (51-200 employees)</option>
                <option value="Large">Large (201+ employees)</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <textarea
                id="jobAddress"
                value={jobAddress}
                onChange={(e) => setJobAddress(e.target.value)} // Handle job address change
                placeholder="Enter Job Address"
                className="input-textarea rounded-corners" // Applying the class for rounded corners
                rows="4" // Adjust the height of the textarea
                required
              />
            </div>
          </div>
          {/* 14th Row: Phone Number and Email ID */}
          <div className="form-row">
            <div className="form-group">
              {/* <label htmlFor="phoneNumber">Phone Number</label> */}
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)} // Handle phone number change
                placeholder="Enter Phone Number"
                className="input-field rounded-corners"
                required
              />
            </div>

            <div className="form-group">
              {/* <label htmlFor="emailId">Email ID</label> */}
              <input
                type="email"
                id="emailId"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)} // Handle email ID change
                placeholder="Enter Email ID"
                className="input-field rounded-corners"
                required
              />
            </div>
          </div>
          {/* 16th Row: Accept Terms and Conditions */}
          <div className="form-row">
            <div className="form-group">
              <label className="terms-label">
                <input
                  type="checkbox"
                  id="termsCheckbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)} // Handle checkbox change
                  className="checkbox-input"
                  required
                />
                <span>
                  I accept the
                  <a href="/terms" target="_blank" className="terms-link">
                    {" "}
                    Terms and Conditions
                  </a>{" "}
                  and
                  <a href="/privacy" target="_blank" className="privacy-link">
                    {" "}
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button className="post-job-btn">Post a Job</button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <img
          src={createJobPostSvg}
          alt="Create Job Post Illustration"
          className="job-post-svg"
        />
      </div>
    </div>
  );
};

export default CreateJobPost;
