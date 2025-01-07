import express from "express";
import cors from "cors";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
import userRouter from "./user/userRouter.js";
// import postRouter from "./book/postRouter.js";
import { config } from "./config/config.js";
import jobRouter from "./job/jobRouter.js";
import dropdownJobTitleRouter from "./dropdown/jobTitle/dropdownJobTitleRouter.js";
import dropdownCategoryRouter from "./dropdown/category/dropdownCategoryRouter.js";
import dropdownSectorRouter from "./dropdown/sector/dropdownSectorRouter.js";
import dropdownSkillRouter from "./dropdown/skill/dropdownSkillRouter.js";

const app = express();

app.use(
  cors({
    origin: config.frontendDomain,
  })
);

app.use(express.json()); // for reading payloads

app.use("/api/users", userRouter);
app.use("/api/job", jobRouter);
app.use("/api/dropdownSector", dropdownSectorRouter);
app.use("/api/dropdownCategory", dropdownCategoryRouter);
app.use("/api/dropdownJobTitle", dropdownJobTitleRouter);
app.use("/api/dropdownSkill", dropdownSkillRouter);

// Global error handler
app.use(globalErrorHandler);

export default app;
