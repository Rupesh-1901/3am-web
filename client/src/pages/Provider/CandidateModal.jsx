/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Modal, Button, Tag } from "antd";
import {
  CloseOutlined,
  EnvironmentOutlined,
  FileTextOutlined,
  LinkOutlined,
} from "@ant-design/icons";

// eslint-disable-next-line react/prop-types
const CandidateModal = ({ isOpen, onClose, applicant }) => {
  if (!applicant) return null; // Ensure applicant data is available

  return (
    <Modal
      visible={isOpen}
      onCancel={onClose}
      footer={null}
      width={800}
      closeIcon={<CloseOutlined style={{ fontSize: "20px" }} />}
      bodyStyle={{ padding: "24px" }}
    >
      {/* Profile Section */}
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "24px" }}
      >
        <img
          src={profileImage} // You can replace this with applicant's image if available
          alt="Profile"
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            objectFit: "cover",
            marginRight: "16px",
          }}
        />
        <div>
          <h3 style={{ margin: 0, color: "#000" }}>{applicant.name}</h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#555",
              marginTop: "4px",
            }}
          >
            <EnvironmentOutlined style={{ marginRight: "4px" }} />
            <span>{applicant.location}</span>
          </div>
        </div>
      </div>

      {/* Status Badges */}
      <div style={{ display: "flex", gap: "16px", marginBottom: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <strong>Origin:</strong>
          <Tag color="blue">Indian</Tag>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <strong>Availability:</strong>
          <Tag color="green">Full-Time</Tag>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <strong>Apply Date:</strong>
          <Tag color="purple">11th August, 2024</Tag>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: "1px solid #f0f0f0", marginBottom: "24px" }}>
        <div style={{ display: "flex", gap: "24px" }}>
          <Button
            type="text"
            style={{ borderBottom: "2px solid #1890ff", color: "#1890ff" }}
          >
            Application
          </Button>
          <Button type="text" style={{ color: "#555" }}>
            Experience
          </Button>
          <Button type="text" style={{ color: "#555" }}>
            Certification & Others
          </Button>
        </div>
      </div>

      {/* About Section */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ marginBottom: "8px", color: "#000" }}>
          About {applicant.name.split(" ")[0]}
        </h4>
        <p style={{ color: "#555" }}>
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      {/* Skills */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ marginBottom: "8px", color: "#000" }}>Skills</h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {[
            "Product Design",
            "UI/UX Design",
            "Prototyping",
            "Interaction Design",
            "Design System",
            "Documentation",
          ].map((skill) => (
            <Tag
              key={skill}
              color="default"
              style={{ padding: "4px 12px", fontSize: "12px" }}
            >
              {skill}
            </Tag>
          ))}
        </div>
      </div>

      {/* Documents */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ marginBottom: "16px", color: "#000" }}>Documents</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {/* Document Item 1 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px",
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <FileTextOutlined style={{ fontSize: "20px", color: "#888" }} />
              <div>
                <div style={{ fontSize: "14px", fontWeight: "500" }}>
                  Product Design
                </div>
                <div style={{ fontSize: "12px", color: "#888" }}>200kb</div>
              </div>
            </div>
            <Button type="link" style={{ color: "#1890ff" }}>
              Download
            </Button>
          </div>

          {/* Document Item 2 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px",
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <LinkOutlined style={{ fontSize: "20px", color: "#888" }} />
              <div>
                <div style={{ fontSize: "14px", fontWeight: "500" }}>
                  Rupesh Portfolio
                </div>
              </div>
            </div>
            <Button type="link" style={{ color: "#1890ff" }}>
              Visit
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

// Placeholder profile image (you can replace this with actual applicant images)
const profileImage =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3";

export default CandidateModal;
