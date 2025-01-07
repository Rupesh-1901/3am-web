// import path from "node:path";
import express from "express";
import {
  createJob,
  jobList,
  getJobPost,
  editJobPost,
  deleteJobPost,
  toggleJobPostActive,
} from "./jobController.js";
import multer from "multer";
import authenticate from "../middlewares/authenticate.js";
import { validate } from "../middlewares/validationMiddleware.js";
import { createJobPostSchema, updateJobPostSchema } from "./jobValidation.js";

const jobRouter = express.Router();

// file store local ->
const upload = multer({
  // eslint-disable-next-line no-undef
  // dest: path.resolve(__dirname, "../../public/data/uploads"),
  limits: { fileSize: 3e7 },
});
// routes
//create a job
jobRouter.post(
  "/create",
  authenticate,
  validate(createJobPostSchema),
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  createJob
);
//JobPosts All list
jobRouter.post(
  "/list",
  authenticate,
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  jobList
);
//Get a Single JobPost by ID
jobRouter.get(
  "/getJobPost/:id",
  authenticate,
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  getJobPost
);
// Edit a JobPost by ID
jobRouter.patch(
  "/edit",
  authenticate,
  validate(updateJobPostSchema),
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  editJobPost
);
jobRouter.patch(
  "/delete/:id",
  authenticate,
  // validate(createJobPostSchema),
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  deleteJobPost
);

jobRouter.patch(
  "/toggle-active/:id",
  authenticate,
  // validate(createJobPostSchema),
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  toggleJobPostActive
);

export default jobRouter;
