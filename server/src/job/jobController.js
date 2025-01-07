/* eslint-disable no-undef */

// import path from "node:path";
// import fs from "node:fs";
// import createHttpError from "http-errors";
import prisma from "../config/dbConfig.js";
import { processedResponse } from "../utils/processedResponse.js";

//create a job
const createJob = async (req, res) => {
  try {
    // Validate the request body

    const {
      jobTitle,
      jobLocation,
      numberOfOpenings,
      area,
      experience,
      monthlyInHand,
      isBonusAvailable,
      jobDescription,
      skills,
      preferredLanguage,
      age,
      certification,
      specialization,
      employmentType,
      interviewMethod,
      companyName,
      sizeOfOrganisation,
      jobAddress,
      phoneNumber,
      emailId,
      isActive,
      hrId,
    } = req.validatedBody;

    // Check if HR user exists
    const hrUser = await prisma.hrUser.findUnique({
      where: { id: BigInt(hrId) },
    });

    if (!hrUser) {
      return res.status(404).json({ error: "HR user not found." });
    }

    // Create the JobPost
    const newJobPost = await prisma.jobPost.create({
      data: {
        jobTitle,
        jobLocation,
        numberOfOpenings,
        area,
        experience,
        monthlyInHand,
        isBonusAvailable,
        jobDescription,
        skills,
        preferredLanguage,
        age,
        certification,
        specialization,
        employmentType,
        interviewMethod,
        companyName,
        sizeOfOrganisation,
        jobAddress,
        phoneNumber,
        emailId,
        isActive,
        isDeleted,
        hr: {
          connect: { id: BigInt(hrId) },
        },
      },
    });
    const serializedData = {
      ...newJobPost,
      id: newJobPost.id.toString(),
      hrId: newJobPost.hrId.toString(),
    };

    res.status(200).json(serializedData);
  } catch (error) {
    console.error("Error fetching JobPosts:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};
//JobPosts All list
const jobList = async (req, res) => {
  // const { id, role } = req.user;
  try {
    const jobPosts = await prisma.jobPost.findMany({
      where: {
        isDeleted: false,
      },
      include: {
        hr: {
          select: {
            id: true,
            email: true,
            fullName: true,
            userName: true,
          },
        },
        applications: true,
      },
    });
    const response = processedResponse(jobPosts);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching JobPosts:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};
//Get a Single JobPost by ID
const getJobPost = async (req, res) => {
  try {
    const { id } = req.params;
    const jobPostId = BigInt(id);

    if (!jobPostId) {
      return res.status(400).json({ error: "Invalid JobPost ID." });
    }

    const jobPost = await prisma.jobPost.findUnique({
      where: { id: jobPostId, isDeleted: false },
      include: {
        hr: {
          select: {
            id: true,
            email: true,
            fullName: true,
            userName: true,
          },
        },
        applications: true,
      },
    });

    if (!jobPost) {
      return res.status(404).json({ error: "JobPost not found." });
    }

    const response = processedResponse(jobPost);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching JobPost:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};
// Edit a JobPost by ID
const editJobPost = async (req, res) => {
  try {
    const validatedData = req.validatedBody;

    // If hrId is being updated, check if the new HR user exists
    if (validatedData.hrId) {
      const hrUser = await prisma.hrUser.findUnique({
        where: { id: BigInt(validatedData.hrId), isDeleted: false },
      });

      if (!hrUser) {
        return res.status(404).json({ error: "HR user not found." });
      }
    }
    const JobPostId = BigInt(validatedData.id);
    delete validatedData.id; // Remove id from the validated data
    // Prepare the data for update, handling hrId if present
    const updateData = { ...validatedData };
    if (validatedData.hrId) {
      updateData.hr = {
        connect: { id: BigInt(validatedData.hrId) },
      };
      delete updateData.hrId; // Remove hrId from the update data as it's handled separately
    }

    // Update the JobPost
    const updatedJobPost = await prisma.jobPost.update({
      where: { id: JobPostId, isDeleted: false },
      data: updateData,
    });
    const response = processedResponse(updatedJobPost);
    res.status(200).json(response);
  } catch (error) {
    if (error.code === "P2025") {
      // Prisma's "Record to update not found."
      return res.status(404).json({ error: "JobPost not found." });
    }
    console.error("Error updating JobPost:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};
// Delete a JobPost by ID
const deleteJobPost = async (req, res) => {
  try {
    const { id } = req.params;
    const jobPostId = BigInt(id);

    if (!jobPostId) {
      return res.status(400).json({ error: "Invalid JobPost ID." });
    }

    // Optional: Check if JobPost exists before attempting to delete
    const jobPost = await prisma.jobPost.update({
      where: { id: jobPostId, isDeleted: false },
      data: { isActive: false, isDeleted: true },
    });

    if (!jobPost) {
      return res.status(404).json({ error: "JobPost not found." });
    }
    res.status(200).json({ message: "JobPost deleted successfully." });
  } catch (error) {
    if (error.code === "P2025") {
      // Prisma's "Record to delete not found."
      return res.status(404).json({ error: "JobPost not found." });
    }
    console.error("Error deleting JobPost:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};
// Toggle Active Status of a JobPost by ID
const toggleJobPostActive = async (req, res) => {
  try {
    const { id } = req.params;
    const jobPostId = BigInt(id);

    if (!jobPostId) {
      return res.status(400).json({ error: "Invalid JobPost ID." });
    }

    // Fetch the current JobPost
    const jobPost = await prisma.jobPost.findUnique({
      where: { id: jobPostId, isDeleted: false },
    });

    if (!jobPost) {
      return res.status(404).json({ error: "JobPost not found." });
    }

    // Toggle the isActive status
    const updatedJobPost = await prisma.jobPost.update({
      where: { id: jobPostId, isDeleted: false },
      data: { isActive: !jobPost.isActive },
    });
    const response = processedResponse(updatedJobPost);

    res.status(200).json({
      message: `JobPost is now ${
        updatedJobPost.isActive ? "active" : "inactive"
      }.`,
      jobPost: response,
    });
  } catch (error) {
    console.error("Error toggling JobPost active status:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

export {
  createJob,
  jobList,
  getJobPost,
  editJobPost,
  deleteJobPost,
  toggleJobPostActive,
};
