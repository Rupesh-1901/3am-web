import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import candidateLogin from "../../assets/candidateLogin.svg";
import employerLogin from "../../assets/employerLogin.svg";
import visibilityOffIcon from "../../assets/visibilityOffIcon.svg";
import visibilityOnIcon from "../../assets/visibilityOnIcon.svg";
import signupGoogle from "../../assets/signupGoogle.svg";
import signupFacebook from "../../assets/signupFacebook.svg";
import { InputCustomFormik } from "../../components/FormComponent/InputCustomFormik";
import axios from "axios";

import { tempLogin } from "../../features/auth/authSlice";
import { loginTypeFunc } from "../../features/auth/authSlice";
import { showToast } from "../../features/ToastSlice";

const LoginPage = () => {
	const { isTempLogin } = useSelector((state) => state.auth);

	const dispatch = useDispatch();
	const [formValues, setFormValues] = useState(null);
	const [password, setPassword] = useState("password");
	const navigate = useNavigate();
	const location = useLocation();
	const [selectedMode, setSelectedMode] = useState("employee");
	const initialvalue = { email: "", password: "" };
	console.log("object formValues", formValues);
	useEffect(() => {
		document.title = `JobSeeker - Login`;
		return () => {
			document.title = "JobSeeker";
		};
	}, []);
	useEffect(() => {
		setSelectedMode(location?.state?.logInUser);
	}, [location]);
	const create = async (payload) => {
		try {
			console.log(payload);
			dispatch(loginTypeFunc(payload.loginType));

			if (selectedMode === "Coordinator") {
				navigate("/coordinator/landing-page");
			} else {
				navigate("/home");
			}
			const response = await axios.post("http://localhost:5513" + "/api/users/login", payload);
			console.log(response.data);
			dispatch(
				showToast({
					text: "Login Successful",
					severity: "success",
				})
			);
			dispatch(tempLogin(true));
		} catch (error) {
			dispatch(
				showToast({
					text: error?.response?.data?.message ?? "Login Failed",
					severity: "error",
				})
			);
			dispatch(tempLogin(true));
		} finally {
			dispatch(tempLogin(true));
		}
	};

	console.log("formValues", formValues);

	const onSubmit = (values) => {
		const payload = { ...values, loginType: selectedMode };

		create(payload);
		// console.log("object values", values);
		// if (values?.email === "rupesh" && values?.password === "rupesh" && selectedMode === "employee") {
		// 	dispatch(tempLogin(true));
		// 	navigate("/home");
		// } else dispatch(tempLogin(false));
	};
	console.log("object isTempLogin", isTempLogin);

	const chooseFormValues = (values) => {
		setFormValues(values);
	};

	return (
		<div style={{ height: "100%", margin: "auto" }}>
			<Formik
				initialValues={initialvalue}
				// validationSchema={

				// }
				enableReinitialize
				onSubmit={onSubmit}
			>
				{(formik) => {
					chooseFormValues && chooseFormValues(formik.values);
					return (
						<Form>
							<div style={{ width: "100%", padding: "32px 32px 1px 61px" }}>
								<div
									style={{
										width: "570px",
										maxWidth: "570px",
										minWidth: "500px",
									}}
								>
									<div>
										<div className="loginFont">Log In</div>
										<div className="loginpFont">
											Don&apos;t have an account?{" "}
											<span
												className="loginLinkColor cursor"
												style={{ textDecoration: "none" }}
												onClick={() => {
													navigate("/auth/register");
												}}
											>
												Create Now
											</span>
										</div>
										<div
											className="loginAs"
											style={{ width: "41.7vw", padding: "0 1rem 1rem 1rem" }}
										>
											<div className="loginAsFont">Log in as</div>
											<div
												style={{
													width: "100%",
													display: "flex",
													justifyContent: "space-between",
													gap: "22px",
												}}
											>
												{" "}
												<div
													className={`loginTabButton cursor ${
														selectedMode === "candidate" ? "activeLoginMode" : ""
													}`}
													onClick={() => {
														setSelectedMode("candidate");
													}}
												>
													<img style={{ height: "17px" }} src={candidateLogin} alt="" />{" "}
													<p className="loginTabButtonFont " style={{ marginTop: "1rem" }}>
														Candidate
													</p>
												</div>{" "}
												<div
													className={`loginTabButton cursor ${
														selectedMode === "employee" ? "activeLoginMode" : ""
													}`}
													onClick={() => {
														setSelectedMode("employee");
													}}
												>
													<img style={{ height: "17px" }} src={employerLogin} alt="" />{" "}
													<p className="loginTabButtonFont" style={{ marginTop: "1rem" }}>
														Employer
													</p>
												</div>{" "}
												<div
													className={`loginTabButton cursor ${
														selectedMode === "Coordinator" ? "activeLoginMode" : ""
													}`}
													onClick={() => {
														setSelectedMode("Coordinator");
													}}
												>
													<img style={{ height: "17px" }} src={employerLogin} alt="" />{" "}
													<p className="loginTabButtonFont" style={{ marginTop: "1.2rem" }}>
														Coordinator
													</p>
												</div>
											</div>
										</div>
										<div>
											<InputCustomFormik name="email" placeholder="Email address" />
											<div className="password-container">
												<InputCustomFormik name="password" placeholder="Password" type={password} />
												<div className="password-icons">
													{password === "password" ? (
														<img
															onClick={() => setPassword("text")}
															src={visibilityOnIcon}
															alt="ShowPassword"
															className="visibilityIcon"
														/>
													) : (
														<img
															onClick={() => setPassword("password")}
															src={visibilityOffIcon}
															alt="HidePassword"
															className="visibilityIcon"
														/>
													)}
												</div>
											</div>
										</div>
										<button
											type="submit"
											className="cursor loginSubmitButton loginSubmitButtonFont"
										>
											Log In
										</button>
									</div>
									<div
										style={{ margin: "10px 0px" }}
										className="loginLinkColor"
										onClick={() => {
											navigate("/auth/forgot-password");
										}}
									>
										Forgot Password
									</div>
									<div
										style={{
											margin: "25px 0px",
											textAlign: "center",
											fontSize: "18px",
										}}
									>
										{" "}
										or
									</div>
									<div
										style={{
											display: "flex",
											justifyContent: "center",
											gap: "60px",
										}}
									>
										<div>
											<img style={{ height: "50px" }} src={signupFacebook} alt="" />
										</div>
										<div>
											<img style={{ height: "50px" }} src={signupGoogle} alt="" />
										</div>
									</div>
								</div>
							</div>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

export default LoginPage;
