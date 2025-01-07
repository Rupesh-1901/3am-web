import prisma from "../../config/dbConfig.js";

//  create a category
const createCategory = async (req, res) => {
  const { name, sectorId } = req.validatedBody;
  const sectorBodyId = parseInt(sectorId, 10);
  try {
    // Check if the Sector exists
    const sector = await prisma.sector.findUnique({
      where: { id: sectorBodyId },
    });

    if (!sector) {
      return res.status(404).json({ error: "Sector not found." });
    }

    const category = await prisma.categories.create({
      data: {
        name,
        sectorId: sectorBodyId,
      },
    });
    res.status(201).json(category);
  } catch (error) {
    console.error("Error creating Category:", error);
    if (error.code === "P2002") {
      // Unique constraint failed
      return res.status(409).json({ error: "Category name must be unique." });
    }
    res.status(500).json({ error: "Internal server error." });
  }
};
// get all categories
const categoryList = async (req, res) => {
  try {
    const categories = await prisma.categories.findMany({
      where: { isDeleted: false },
      include: {
        sector: true, // Include related Sector
        jobTitle: true, // Include related JobTitles
      },
      orderBy: {
        id: "asc",
      },
    });

    res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching Categories:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};
// get a single category by id
const getCategory = async (req, res) => {
  const categoryId = parseInt(req.params.id, 10);

  if (isNaN(categoryId)) {
    return res.status(400).json({ error: "Invalid Category ID." });
  }

  try {
    const category = await prisma.categories.findUnique({
      where: { id: categoryId },
      include: {
        sector: true,
        jobTitle: true,
      },
    });

    if (!category) {
      return res.status(404).json({ error: "Category not found." });
    }

    res.status(200).json(category);
  } catch (error) {
    console.error("Error fetching Category:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};
// update a category by id
const editCategory = async (req, res) => {
  const { name } = req.validatedBody;
  const sectorId = parseInt(req.validatedBody.sectorId, 10);
  const id = parseInt(req.validatedBody.id, 10);

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid Category ID." });
  }
  try {
    // If sectorId is being updated, check if the new Sector exists
    if (sectorId !== undefined) {
      const sector = await prisma.sector.findUnique({
        where: { id: sectorId, isDeleted: false },
      });

      if (!sector) {
        return res.status(404).json({ error: "New Sector not found." });
      }
    }

    const category = await prisma.categories.update({
      where: { id: id, isDeleted: false },
      data: {
        name,
        sectorId: sectorId,
      },
    });

    res.status(200).json(category);
  } catch (error) {
    console.error("Error updating Category:", error);
    if (error.code === "P2002") {
      return res.status(409).json({ error: "Category name must be unique." });
    }
    if (error.code === "P2025") {
      // Record not found
      return res.status(404).json({ error: "Category not found." });
    }
    res.status(500).json({ error: "Internal server error." });
  }
};
// delete a category by id
const deleteCategory = async (req, res) => {
  const categoryId = parseInt(req.params.id, 10);

  if (isNaN(categoryId)) {
    return res.status(400).json({ error: "Invalid Category ID." });
  }

  try {
    // Optional: Check if Category has related JobTitles
    const jobTitles = await prisma.jobTitle.findMany({
      where: { categoryId, isDeleted: false },
    });

    if (jobTitles.length > 0) {
      return res
        .status(400)
        .json({ error: "Cannot delete Category with existing Job Titles." });
    }

    await prisma.categories.update({
      where: { id: categoryId, isDeleted: false },
      data: {
        isDeleted: true,
        isActive: false,
      },
    });

    res.status(200).json({ message: "Category deleted successfully." });
  } catch (error) {
    console.error("Error deleting Category:", error);
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Category not found." });
    }
    res.status(500).json({ error: "Internal server error." });
  }
};
export {
  createCategory,
  categoryList,
  getCategory,
  editCategory,
  deleteCategory,
};
