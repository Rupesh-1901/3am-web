// import path from "node:path";
import express from "express";
import multer from "multer";
import authenticate from "../../middlewares/authenticate.js";
import {
  createSkill,
  deleteSkill,
  editSkill,
  getSkill,
  skillList,
} from "./dropdownSkillController.js";
import { validate } from "../../middlewares/validationMiddleware.js";
import {
  createSkillSchema,
  updateSkillSchema,
} from "./dropdownSkillValidation.js";

const dropdownSkillRouter = express.Router();

// file store local ->
const upload = multer({
  // eslint-disable-next-line no-undef
  // dest: path.resolve(__dirname, "../../public/data/uploads"),
  limits: { fileSize: 3e7 },
});
// ROUTES

dropdownSkillRouter.post(
  "/create",
  authenticate,
  validate(createSkillSchema),
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  createSkill
);
dropdownSkillRouter.post(
  "/list",
  authenticate,
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  skillList
);
dropdownSkillRouter.get(
  "/getJobPost/:id",
  authenticate,
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  getSkill
);
dropdownSkillRouter.patch(
  "/edit",
  authenticate,
  validate(updateSkillSchema),
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  editSkill
);
dropdownSkillRouter.patch(
  "/delete/:id",
  authenticate,
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  deleteSkill
);

export default dropdownSkillRouter;
