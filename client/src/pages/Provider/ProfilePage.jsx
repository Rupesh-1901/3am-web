import React from "react";
import { Form, Input, Button, Upload } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  FileTextOutlined,
  GlobalOutlined,
  HomeOutlined,
  TeamOutlined,
  CalendarOutlined,
  LinkOutlined,
  PhoneOutlined,
  FacebookOutlined,
  FileImageOutlined,
} from "@ant-design/icons";
import announcementLanding from "../../assets/announcementLanding.svg";
import "./ProfilePage.css";

const ProfilePage = () => {
  return (
    <div className="forms">
      <div className="forms-container">
        {/* Left Side - Static Image with Register Text */}
        <div className="forms-left">
          <div className="overlay">
            <span className="register-text">Secure your brand's identity now!</span>
          </div>
          <img src={announcementLanding} alt="Company" className="company-image" />
        </div>

        {/* Right Side - Scrollable Ant Design Form */}
        <div className="forms-right">
          <h2>Company Registration</h2>
          <Form layout="vertical">
            <Form.Item label="Company Name" name="companyName" rules={[{ required: true, message: "Company name is required!" }]}> 
              <Input prefix={<UserOutlined />} placeholder="Enter company name" />
            </Form.Item>

            <Form.Item label="Logo Upload" name="logo" rules={[{ required: true, message: "Company logo is required!" }]}> 
              <Upload>
                <Button icon={<FileImageOutlined />}>Upload Company Logo</Button>
              </Upload>
            </Form.Item>

            <Form.Item label="Cover Image Upload" name="coverImage" rules={[{ required: true, message: "Cover image is required!" }]}> 
              <Upload>
                <Button icon={<FileImageOutlined />}>Upload Cover Image</Button>
              </Upload>
            </Form.Item>

            <Form.Item label="Tagline/Slogan" name="tagline" rules={[{ required: true, message: "Tagline is required!" }]}> 
              <Input prefix={<FileTextOutlined />} placeholder="Enter tagline or slogan" />
            </Form.Item>

            <Form.Item label="Company Description" name="description" rules={[{ required: true, message: "Description is required!" }]}> 
              <Input.TextArea placeholder="Describe your company" rows={4} />
            </Form.Item>

            <Form.Item label="Industry & Specializations" name="industry" rules={[{ required: true, message: "Industry details are required!" }]}> 
              <Input prefix={<GlobalOutlined />} placeholder="Enter industry details" />
            </Form.Item>

            <Form.Item label="Headquarters/Location" name="location" rules={[{ required: true, message: "Location is required!" }]}> 
              <Input prefix={<HomeOutlined />} placeholder="Enter company location" />
            </Form.Item>

            <Form.Item label="Company Size" name="size" rules={[{ required: true, message: "Company size is required!" }]}> 
              <Input prefix={<TeamOutlined />} placeholder="Number of employees" />
            </Form.Item>

            <Form.Item label="Year Established" name="year" rules={[{ required: true, message: "Founding year is required!" }]}> 
              <Input prefix={<CalendarOutlined />} placeholder="Enter founding year" />
            </Form.Item>

            <Form.Item label="Website URL" name="website" rules={[{ required: true, message: "Website URL is required!" }]}> 
              <Input prefix={<LinkOutlined />} placeholder="Enter company website" />
            </Form.Item>

            <Form.Item label="Social Media Links" name="socialMedia" rules={[{ required: true, message: "At least one social media link is required!" }]}> 
              <Input prefix={<FacebookOutlined />} placeholder="Enter social media links" />
            </Form.Item>

            <Form.Item label="Contact Information" name="contact" rules={[{ required: true, message: "Contact details are required!" }]}> 
              <Input prefix={<PhoneOutlined />} placeholder="Enter contact details" />
            </Form.Item>

            <Form.Item label="GST Certificate" name="gst" rules={[{ required: true, message: "GST certificate is required!" }]}> 
              <Upload>
                <Button icon={<FileImageOutlined />}>Upload GST Certificate</Button>
              </Upload>
            </Form.Item>

            <Form.Item label="IT Returns (Last Year)" name="itReturns" rules={[{ required: true, message: "IT Return is required!" }]}> 
              <Upload>
                <Button icon={<UploadOutlined />}>Upload IT Return</Button>
              </Upload>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
