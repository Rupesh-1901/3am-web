// import path from "node:path";
import express from "express";
import { createJob, deleteBook, getSingleBook, listBooks, updateBook } from "./jobController.js";
import multer from "multer";
import authenticate from "../middlewares/authenticate.js";

const jobRouter = express.Router();

// file store local ->
const upload = multer({
	// eslint-disable-next-line no-undef
	// dest: path.resolve(__dirname, "../../public/data/uploads"),
	limits: { fileSize: 3e7 },
});
// routes
// /api/books
jobRouter.post(
	"/",
	authenticate,
	upload.fields([
		{ name: "coverImage", maxCount: 1 },
		{ name: "file", maxCount: 1 },
	]),
	createJob
);

jobRouter.patch(
	"/:jobId",
	authenticate,
	upload.fields([
		{ name: "coverImage", maxCount: 1 },
		{ name: "file", maxCount: 1 },
	]),
	updateBook
);

jobRouter.get("/", listBooks);
jobRouter.get("/:jobId", getSingleBook);

jobRouter.delete("/:jobId", authenticate, deleteBook);

export default jobRouter;
