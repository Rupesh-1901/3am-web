import { config } from "../config/config.js";

const NODE_ENV = config.env;
export const validate = (schema) => (req, res, next) => {
  const validationResult = schema.safeParse(req.body);

  if (!validationResult.success) {
    if (NODE_ENV === "development") {
      const errors = validationResult.error.errors.map((err) => ({
        path: err.path.join("."),
        message: err.message,
      }));

      return res.status(400).json({
        status: "error",
        message: "Validation failed",
        errors,
      });
    } else if (NODE_ENV === "production") {
      return res.status(400).json({
        status: "error",
        message: "Invalid request data",
      });
    } else {
      return res.status(400).json({
        status: "error",
        message: "Invalid request data",
      });
    }
  }

  req.validatedBody = validationResult.data;
  next();
};
