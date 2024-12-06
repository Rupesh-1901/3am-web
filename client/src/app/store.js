import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import ToastReducer from "../features/ToastSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		toast: ToastReducer,
	},
});
