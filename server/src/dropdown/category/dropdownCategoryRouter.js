// import path from "node:path";
import express from "express";
import multer from "multer";
import authenticate from "../../middlewares/authenticate.js";
import {
  categoryList,
  createCategory,
  deleteCategory,
  editCategory,
  getCategory,
} from "./dropdownCategoryController.js";
import { validate } from "../../middlewares/validationMiddleware.js";
import {
  createCategorySchema,
  updateCategorySchema,
} from "./dropdownCategoryValidation.js";

const dropdownCategoryRouter = express.Router();

// file store local ->
const upload = multer({
  // eslint-disable-next-line no-undef
  // dest: path.resolve(__dirname, "../../public/data/uploads"),
  limits: { fileSize: 3e7 },
});
//ROUTES

dropdownCategoryRouter.post(
  "/create",
  authenticate,
  validate(createCategorySchema),
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  createCategory
);
dropdownCategoryRouter.post(
  "/list",
  authenticate,
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  categoryList
);
dropdownCategoryRouter.get(
  "/getJobPost/:id",
  authenticate,
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  getCategory
);
dropdownCategoryRouter.patch(
  "/edit",
  authenticate,
  validate(updateCategorySchema),
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  editCategory
);
dropdownCategoryRouter.patch(
  "/delete/:id",
  authenticate,
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  deleteCategory
);

export default dropdownCategoryRouter;
