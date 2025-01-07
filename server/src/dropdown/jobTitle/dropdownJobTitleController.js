import prisma from "../../config/dbConfig.js";

//  create a category
const createJobTitle = async (req, res) => {
  const { name } = req.validatedBody;
  const categoryId = parseInt(req.validatedBody.categoryId, 10);

  try {
    // Check if the Category exists
    const category = await prisma.categories.findUnique({
      where: { id: categoryId, isDeleted: false },
    });

    if (!category) {
      return res.status(404).json({ error: "Category not found." });
    }

    const jobTitle = await prisma.jobTitle.create({
      data: {
        name,
        categoryId,
      },
    });
    res.status(200).json(jobTitle);
  } catch (error) {
    console.error("Error creating JobTitle:", error);
    if (error.code === "P2002") {
      // Unique constraint failed
      return res.status(409).json({ error: "JobTitle name must be unique." });
    }
    res.status(500).json({ error: "Internal server error." });
  }
};
// get all categories
const jobTitleList = async (req, res) => {
  try {
    const jobTitles = await prisma.jobTitle.findMany({
      where: { isDeleted: false },
      include: {
        category: true, // Include related Category
        skills: true, // Include related Skills
      },
      orderBy: {
        id: "asc",
      },
    });
    res.status(200).json(jobTitles);
  } catch (error) {
    console.error("Error fetching JobTitles:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};
// get a single category by id
const getJobTitle = async (req, res) => {
  const jobTitleId = parseInt(req.params.id, 10);

  if (isNaN(jobTitleId)) {
    return res.status(400).json({ error: "Invalid JobTitle ID." });
  }

  try {
    const jobTitle = await prisma.jobTitle.findUnique({
      where: { id: jobTitleId, isDeleted: false },
      include: {
        category: true,
        skills: true,
      },
    });

    if (!jobTitle) {
      return res.status(404).json({ error: "JobTitle not found." });
    }

    res.status(200).json(jobTitle);
  } catch (error) {
    console.error("Error fetching JobTitle:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};
// update a category by id
const editJobTitle = async (req, res) => {
  const { name } = req.validatedBody;
  const categoryId = parseInt(req.validatedBody.categoryId, 10);
  const jobTitleId = parseInt(req.validatedBody.id, 10);

  if (isNaN(jobTitleId)) {
    return res.status(400).json({ error: "Invalid JobTitle ID." });
  }
  try {
    // If categoryId is being updated, check if the new Category exists
    if (categoryId) {
      const category = await prisma.categories.findUnique({
        where: { id: categoryId, isDeleted: false },
      });

      if (!category) {
        return res.status(404).json({ error: "New Category not found." });
      }
    }

    const jobTitle = await prisma.jobTitle.update({
      where: { id: jobTitleId, isDeleted: false },
      data: {
        name,
        categoryId,
      },
    });

    res.status(200).json(jobTitle);
  } catch (error) {
    console.error("Error updating JobTitle:", error);
    if (error.code === "P2002") {
      return res.status(409).json({ error: "JobTitle name must be unique." });
    }
    if (error.code === "P2025") {
      // Record not found
      return res.status(404).json({ error: "JobTitle not found." });
    }
    res.status(500).json({ error: "Internal server error." });
  }
};
// delete a category by id
const deleteJobTitle = async (req, res) => {
  const jobTitleId = parseInt(req.params.id, 10);

  if (isNaN(jobTitleId)) {
    return res.status(400).json({ error: "Invalid JobTitle ID." });
  }

  try {
    // Optional: Check if JobTitle has related Skills
    const skills = await prisma.skills.findMany({
      where: { jobTitleId, isDeleted: false },
    });

    if (skills.length > 0) {
      return res
        .status(400)
        .json({ error: "Cannot delete JobTitle with existing Skills." });
    }

    await prisma.jobTitle.update({
      where: { id: jobTitleId, isDeleted: false },
      data: { isDeleted: true, isActive: false },
    });

    res.status(200).json({ message: "JobTitle deleted successfully." });
  } catch (error) {
    console.error("Error deleting JobTitle:", error);
    if (error.code === "P2025") {
      return res.status(404).json({ error: "JobTitle not found." });
    }
    res.status(500).json({ error: "Internal server error." });
  }
};
export {
  createJobTitle,
  jobTitleList,
  getJobTitle,
  editJobTitle,
  deleteJobTitle,
};
