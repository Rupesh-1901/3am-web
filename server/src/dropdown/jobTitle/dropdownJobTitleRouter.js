// import path from "node:path";
import express from "express";
import multer from "multer";
import authenticate from "../../middlewares/authenticate.js";
import {
  createJobTitle,
  deleteJobTitle,
  editJobTitle,
  getJobTitle,
  jobTitleList,
} from "./dropdownJobTitleController.js";
import { validate } from "../../middlewares/validationMiddleware.js";
import {
  createJobTitleSchema,
  updateJobTitleSchema,
} from "./dropdownJobTitleValidation.js";

const dropdownJobTitleRouter = express.Router();

// file store local ->
const upload = multer({
  // eslint-disable-next-line no-undef
  // dest: path.resolve(__dirname, "../../public/data/uploads"),
  limits: { fileSize: 3e7 },
});
//ROUTES

dropdownJobTitleRouter.post(
  "/create",
  authenticate,
  validate(createJobTitleSchema),
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  createJobTitle
);
dropdownJobTitleRouter.post(
  "/list",
  authenticate,
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  jobTitleList
);
dropdownJobTitleRouter.get(
  "/getJobPost/:id",
  authenticate,
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  getJobTitle
);
dropdownJobTitleRouter.patch(
  "/edit",
  authenticate,
  validate(updateJobTitleSchema),
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  editJobTitle
);
dropdownJobTitleRouter.patch(
  "/delete/:id",
  authenticate,
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  deleteJobTitle
);

export default dropdownJobTitleRouter;
