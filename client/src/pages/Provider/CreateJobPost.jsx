/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./provider.css";

const predefinedSkills = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "React",
  "Node.js",
  "Django",
  "Ruby on Rails",
  "SQL",
  "NoSQL",
];

const CreateJobPost = () => {
  const [companyName, setCompanyName] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [expectedSkills, setExpectedSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [otherRequirements, setOtherRequirements] = useState([
    { key: "", value: "" },
  ]);

  // Handle changes for other requirements
  const handleOtherRequirementChange = (index, field, value) => {
    const newOtherRequirements = [...otherRequirements];
    newOtherRequirements[index][field] = value;
    setOtherRequirements(newOtherRequirements);
  };

  // Add a new key-value pair
  const addOtherRequirement = () => {
    setOtherRequirements([...otherRequirements, { key: "", value: "" }]);
  };

  // Remove a key-value pair
  const removeOtherRequirement = (index) => {
    const newOtherRequirements = otherRequirements.filter(
      (req, _, i) => i !== index
    );
    setOtherRequirements(newOtherRequirements);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare form data
    const formData = {
      companyName,
      jobPosition,
      expectedSkills,
      jobDescription,
      otherRequirements: otherRequirements.filter(
        (req) => req.key.trim() !== "" && req.value.trim() !== ""
      ),
    };

    // For now, just log the form data
    console.log("Job Post Created:", formData);

    // Reset the form (optional)
    setCompanyName("");
    setJobPosition("");
    setExpectedSkills([]);
    setSelectedSkill("");
    setJobDescription("");
    setOtherRequirements([{ key: "", value: "" }]);
  };

  // Handle expected skill selection
  const handleSkillSelect = (e) => {
    setSelectedSkill(e.target.value);
  };

  // Add selected skill to expectedSkills
  const addSkill = () => {
    if (selectedSkill && !expectedSkills.includes(selectedSkill)) {
      setExpectedSkills([...expectedSkills, selectedSkill]);
      setSelectedSkill("");
    }
  };

  // Remove a skill from expectedSkills
  const removeSkill = (skillToRemove) => {
    setExpectedSkills(
      expectedSkills.filter((skill) => skill !== skillToRemove)
    );
  };

  return (
    <div className="create-job-post-container">
      <h2>Create Job Post</h2>
      <form className="create-job-post-form" onSubmit={handleSubmit}>
        {/* Company Name */}
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
            className="input-shorttext"
            placeholder="Enter your company name"
          />
        </div>

        {/* Job Position */}
        <div className="form-group">
          <label htmlFor="jobPosition">Job Position</label>
          <input
            type="text"
            id="jobPosition"
            value={jobPosition}
            onChange={(e) => setJobPosition(e.target.value)}
            required
            className="input-shorttext"
            placeholder="Enter the job position"
          />
        </div>

        {/* Skills Expected */}
        <div className="form-group">
          <label htmlFor="expectedSkills">Skills Expected</label>
          <div className="skills-input-container">
            <select
              id="expectedSkills"
              value={selectedSkill}
              onChange={handleSkillSelect}
              className="input-shorttext select-skill"
            >
              <option value="" disabled>
                Select a skill
              </option>
              {predefinedSkills.map((skill, index) => (
                <option key={index} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
            <button
              type="button"
              className="add-skill-button"
              onClick={addSkill}
              disabled={
                !selectedSkill || expectedSkills.includes(selectedSkill)
              }
            >
              Add Skill
            </button>
          </div>
          <div className="skills-list">
            {expectedSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <span>{skill}</span>
                <button
                  type="button"
                  className="remove-skill-button"
                  onClick={() => removeSkill(skill)}
                  aria-label={`Remove ${skill}`}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
          <small className="form-hint">Add expected skills.</small>
        </div>

        {/* Job Description */}
        <div className="form-group">
          <label htmlFor="jobDescription">Job Description</label>
          <textarea
            id="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            required
            className="input-shorttext"
            placeholder="Enter the job description"
            rows="5"
          ></textarea>
        </div>

        {/* Other Requirements */}
        <div className="form-group">
          <label>Other Requirements</label>
          {/* <div>Other Requirements</div> */}
          {otherRequirements.map((req, index) => (
            <div key={index} className="other-requirement">
              <input
                type="text"
                placeholder="Key"
                value={req.key}
                onChange={(e) =>
                  handleOtherRequirementChange(index, "key", e.target.value)
                }
                className="input-shorttext small-input"
                required
              />
              <input
                type="text"
                placeholder="Value"
                value={req.value}
                onChange={(e) =>
                  handleOtherRequirementChange(index, "value", e.target.value)
                }
                className="input-shorttext small-input"
                required
              />
              {otherRequirements.length > 1 && (
                <button
                  type="button"
                  className="remove-button"
                  onClick={() => removeOtherRequirement(index)}
                  aria-label="Remove requirement"
                >
                  &times;
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className="add-button"
            onClick={addOtherRequirement}
          >
            + Add Requirement
          </button>
        </div>

        {/* Submit Button */}
        <div className="form-group">
          <button type="submit" className="loginSubmitButton">
            <span className="loginSubmitButtonFont">Create Job Post</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateJobPost;
