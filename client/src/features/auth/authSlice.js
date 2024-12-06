import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isTempLogin: false,
	userLogin: false,
	userType: localStorage.getItem("userType") || null,
	candidateLogin: false,
	consultantLogin: false,
	LoggedInUser: {},
	token: localStorage.getItem("token") || null,
	loading: false,
	followLoading: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		checkLogin: (state) => {
			state.token = localStorage.getItem("token");
			state.userType = localStorage.getItem("userType");
			if (state.token !== null) {
				if (state.userType !== null) {
					switch (state.userType) {
						case "emp":
							state.userLogin = true;
							state.candidateLogin = false;
							state.consultantLogin = false;
							break;
						case "can":
							state.userLogin = false;
							state.candidateLogin = true;
							state.consultantLogin = false;
							break;
						case "con":
							state.userLogin = false;
							state.candidateLogin = false;
							state.consultantLogin = true;
							break;
						default:
							state.userLogin = false;
							state.candidateLogin = false;
							state.consultantLogin = false;
							break;
					}
				}
			}
			// state.token!==null ? state.userLogin = true : state.userLogin = false;
			// state.token!==null ? state.candidateLogin = true : state.candidateLogin = false;
			// state.token!==null ? state.consultantLogin = true : state.consultantLogin = false;
		},
		tempLogin: (state, action) => {
			state.isTempLogin = action.payload;
		},
		loggedOut: (state) => {
			state.userLogin = false;
			state.candidateLogin = false;
			state.consultantLogin = false;
			state.token = "";
			localStorage.removeItem("token");
			localStorage.removeItem("userType");
		},
		isLoading: (state, action) => {
			state.loading = action.payload;
		},
		isFollowLoading: (state, action) => {
			state.followLoading = action.payload;
		},
		setEmployeeData: (state, action) => {
			state.LoggedInUser = action.payload;
		},
	},
});

export const { checkLogin, loggedOut, isLoading, isFollowLoading, setEmployeeData, tempLogin } =
	authSlice.actions;
export default authSlice.reducer;
