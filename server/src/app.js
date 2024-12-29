import express from "express";
import cors from "cors";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
import userRouter from "./user/userRouter.js";
// import postRouter from "./book/postRouter.js";
import { config } from "./config/config.js";
import jobRouter from "./job/jobRouter.js";

const app = express();

app.use(
	cors({
		origin: config.frontendDomain,
	})
);

app.use(express.json()); // for reading payloads

app.use("/api/users", userRouter);
app.use("/api/job", jobRouter);

// Global error handler
app.use(globalErrorHandler);

export default app;
