import prisma from "../../config/dbConfig.js";

//  create a category
const createSkill = async (req, res) => {
  const { name } = req.validatedBody;
  const jobTitleId = parseInt(req.validatedBody.jobTitleId, 10);

  try {
    // Check if the JobTitle exists
    const jobTitle = await prisma.jobTitle.findUnique({
      where: { id: jobTitleId, isDeleted: false },
    });

    if (!jobTitle) {
      return res.status(404).json({ error: "JobTitle not found." });
    }

    const skill = await prisma.skills.create({
      data: {
        name,
        jobTitleId,
      },
    });
    res.status(200).json(skill);
  } catch (error) {
    console.error("Error creating Skill:", error);
    if (error.code === "P2002") {
      // Unique constraint failed
      return res.status(409).json({ error: "Skill name must be unique." });
    }
    res.status(500).json({ error: "Internal server error." });
  }
};
// get all categories
const skillList = async (req, res) => {
  try {
    const skills = await prisma.skills.findMany({
      where: { isDeleted: false },
      include: {
        jobTitle: true, // Include related JobTitle
      },
      orderBy: {
        id: "asc",
      },
    });
    res.status(200).json(skills);
  } catch (error) {
    console.error("Error fetching Skills:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};
// get a single category by id
const getSkill = async (req, res) => {
  const skillId = parseInt(req.params.id, 10);

  if (isNaN(skillId)) {
    return res.status(400).json({ error: "Invalid Skill ID." });
  }

  try {
    const skill = await prisma.skills.findUnique({
      where: { id: skillId },
      include: {
        jobTitle: true,
      },
    });

    if (!skill) {
      return res.status(404).json({ error: "Skill not found." });
    }

    res.status(200).json(skill);
  } catch (error) {
    console.error("Error fetching Skill:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};
// update a category by id
const editSkill = async (req, res) => {
  const { name } = req.validatedBody;
  const jobTitleId = parseInt(req.validatedBody.jobTitleId, 10);
  const skillId = parseInt(req.validatedBody.id, 10);

  if (isNaN(skillId)) {
    return res.status(400).json({ error: "Invalid Skill ID." });
  }
  try {
    // If jobTitleId is being updated, check if the new JobTitle exists
    if (jobTitleId !== undefined) {
      const jobTitle = await prisma.jobTitle.findUnique({
        where: { id: jobTitleId, isDeleted: false },
      });

      if (!jobTitle) {
        return res.status(404).json({ error: "New JobTitle not found." });
      }
    }

    const skill = await prisma.skills.update({
      where: { id: skillId, isDeleted: false },
      data: {
        name,
        jobTitleId,
      },
    });

    res.status(200).json(skill);
  } catch (error) {
    console.error("Error updating Skill:", error);
    if (error.code === "P2002") {
      return res.status(409).json({ error: "Skill name must be unique." });
    }
    if (error.code === "P2025") {
      // Record not found
      return res.status(404).json({ error: "Skill not found." });
    }
    res.status(500).json({ error: "Internal server error." });
  }
};
// delete a category by id
const deleteSkill = async (req, res) => {
  const skillId = parseInt(req.params.id, 10);

  if (isNaN(skillId)) {
    return res.status(400).json({ error: "Invalid Skill ID." });
  }

  try {
    await prisma.skills.update({
      where: { id: skillId, isDeleted: false },
      data: {
        isDeleted: true,
        isActive: false,
      },
    });

    res.status(200).json({ message: "Skill deleted successfully." });
  } catch (error) {
    console.error("Error deleting Skill:", error);
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Skill not found." });
    }
    res.status(500).json({ error: "Internal server error." });
  }
};
export { createSkill, skillList, getSkill, editSkill, deleteSkill };
