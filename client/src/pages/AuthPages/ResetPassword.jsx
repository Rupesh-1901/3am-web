import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import visibilityOffIcon from "../../assets/visibilityOffIcon.svg";
import visibilityOnIcon from "../../assets/visibilityOnIcon.svg";
import signupGoogle from "../../assets/signupGoogle.svg";
import signupFacebook from "../../assets/signupFacebook.svg";
import { InputCustomFormik } from "../../components/FormComponent/InputCustomFormik";
import { tempLogin } from "../../features/auth/authSlice";

const ResetPassword = () => {
	useEffect(() => {
		document.title = `JobSeeker - Reset Password`;
		return () => {
			document.title = "JobSeeker";
		};
	}, []);
	const { isTempLogin } = useSelector((state) => state.auth);

	const { state } = useLocation();
	const dispatch = useDispatch();
	const [formValues, setFormValues] = useState(null);
	const [password, setPassword] = useState("password");
	const [selectedMode, setSelectedMode] = useState("empl");
	const navigate = useNavigate();
	const initialvalue = { email: "", password: "" };
	console.log("object formValues", formValues);
	// const create = async (values, url) => {
	// 	try {
	// 		dispatch(isLoading(true));
	// 		setLoading(true);
	// 		const result = await postRequest(url, values);
	// 		if (result) dispatch(showToast({ text: "Successfully Created", severity: "success" }));
	// 		returnPage();
	// 	} catch (error) {
	// 		dispatch(
	// 			showToast({
	// 				text: error?.response?.data?.title ?? "some error occured",
	// 				severity: "error",
	// 			})
	// 		);
	// 	} finally {
	// 		dispatch(isLoading(false));
	// 		setLoading(false);
	// 	}
	// };

	console.log("formValues", formValues);

	const onSubmit = (values) => {
		console.log("object values", values);
		if (values?.email === "rupesh" && values?.password === "rupesh" && selectedMode === "empl") {
			dispatch(tempLogin(true));
			navigate("/home");
		} else dispatch(tempLogin(false));
	};
	console.log("object isTempLogin", isTempLogin);

	const returnPage = () => {
		if (state?.returnUrl) navigate(state?.returnUrl);
		else navigate(-1);
	};
	const chooseFormValues = (values) => {
		setFormValues(values);
	};

	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div style={{ width: "fit-content" }}>
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
								<div style={{ padding: "32px 32px 1px 61px" }}>
									<div style={{ width: "570px", maxWidth: "570px", minWidth: "500px" }}>
										<div>
											<div style={{ textAlign: "center" }} className="loginFont">
												Reset Password
											</div>

											<div>
												<InputCustomFormik name="email" placeholder="Email address" />
												<div className="password-container">
													<InputCustomFormik
														name="password"
														placeholder="Password"
														type={password}
													/>
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
												Send Email
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
										<div style={{ margin: "25px 0px", textAlign: "center", fontSize: "18px" }}>
											{" "}
											or
										</div>
										<div style={{ display: "flex", justifyContent: "center", gap: "60px" }}>
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
		</div>
	);
};

export default ResetPassword;
