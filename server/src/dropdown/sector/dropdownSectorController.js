import prisma from "../../config/dbConfig.js";
import { processedResponse } from "../../utils/processedResponse.js";

//   create a sector
const createSector = async (req, res) => {
  const { name } = req.validatedBody;

  try {
    const sector = await prisma.sector.create({
      data: { name },
    });
    const response = processedResponse(sector);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error creating Sector:", error);
    if (error.code === "P2002") {
      // Unique constraint failed
      return res.status(409).json({ error: "Sector name must be unique." });
    }
    res.status(500).json({ error: "Internal server error." });
  }
};
//  get all sectors
const sectorList = async (req, res) => {
  try {
    const sectors = await prisma.sector.findMany({
      where: { isDeleted: false },
      include: {
        category: true, // Include related Categories
      },
      orderBy: {
        id: "asc",
      },
    });
    res.status(200).json(sectors);
  } catch (error) {
    console.error("Error fetching Sectors:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};
// get a single sector by id
const getSector = async (req, res) => {
  const sectorId = parseInt(req.params.id, 10);

  if (isNaN(sectorId)) {
    return res.status(400).json({ error: "Invalid Sector ID." });
  }

  try {
    const sector = await prisma.sector.findUnique({
      where: { id: sectorId, isDeleted: false },
      include: {
        category: true,
      },
    });

    if (!sector) {
      return res.status(404).json({ error: "Sector not found." });
    }

    res.status(200).json(sector);
  } catch (error) {
    console.error("Error fetching Sector:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};
// update a sector by id
const editSector = async (req, res) => {
  const { name, id } = req.validatedBody;
  const sectorId = parseInt(id, 10);
  if (isNaN(sectorId)) {
    return res.status(400).json({ error: "Invalid Sector ID." });
  }

  try {
    const sector = await prisma.sector.update({
      where: { id: sectorId, isDeleted: false },
      data: { name },
    });
    res.status(200).json(sector);
  } catch (error) {
    console.error("Error updating Sector:", error);
    if (error.code === "P2002") {
      return res.status(409).json({ error: "Sector name must be unique." });
    }
    if (error.code === "P2025") {
      // Record not found
      return res.status(404).json({ error: "Sector not found." });
    }
    res.status(500).json({ error: "Internal server error." });
  }
};
// delete a sector by id
const deleteSector = async (req, res) => {
  const sectorId = parseInt(req.params.id, 10);

  if (isNaN(sectorId)) {
    return res.status(400).json({ error: "Invalid Sector ID." });
  }

  try {
    // Optional: Check if Sector has related Categories
    const categories = await prisma.categories.findMany({
      where: { sectorId, isDeleted: false },
    });

    if (categories.length > 0) {
      return res
        .status(400)
        .json({ error: "Cannot delete Sector with existing Categories." });
    }

    await prisma.sector.update({
      where: { id: sectorId, isDeleted: false },
      data: {
        isDeleted: true,
        isActive: false,
      },
    });

    res.status(200).json({ message: "Sector deleted successfully." });
  } catch (error) {
    console.error("Error deleting Sector:", error);
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Sector not found." });
    }
    res.status(500).json({ error: "Internal server error." });
  }
};

export { createSector, sectorList, getSector, editSector, deleteSector };
