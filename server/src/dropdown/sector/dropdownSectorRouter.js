// import path from "node:path";
import express from "express";
import multer from "multer";
import authenticate from "../../middlewares/authenticate.js";
import {
  createSector,
  deleteSector,
  editSector,
  getSector,
  sectorList,
} from "./dropdownSectorController.js";
import { validate } from "../../middlewares/validationMiddleware.js";
import {
  createSectorSchema,
  updateSectorSchema,
} from "./dropdownSectorValidation.js";

const dropdownSectorRouter = express.Router();

// file store local ->
const upload = multer({
  // eslint-disable-next-line no-undef
  // dest: path.resolve(__dirname, "../../public/data/uploads"),
  limits: { fileSize: 3e7 },
});
// SECTOR ROUTES

dropdownSectorRouter.post(
  "/create",
  authenticate,
  validate(createSectorSchema),
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  createSector
);
dropdownSectorRouter.post(
  "/list",
  authenticate,
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  sectorList
);
dropdownSectorRouter.get(
  "/getJobPost/:id",
  authenticate,
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  getSector
);
dropdownSectorRouter.patch(
  "/edit",
  authenticate,
  validate(updateSectorSchema),
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  editSector
);
dropdownSectorRouter.patch(
  "/delete/:id",
  authenticate,
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  deleteSector
);

export default dropdownSectorRouter;
