// utils/getPrismaModel.js

import { userRolesConfig } from "./userRolesConfig.js";

export const getModelConfig = (role) => {
  const config = userRolesConfig[role];
  if (!config) {
    throw new Error("Please check your credentials and try again.");
  }
  return config.model;
};
