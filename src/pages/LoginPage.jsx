import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react";
import { Form, Formik } from "formik";
import login from "../assets/login";

const LoginPage = () => {
	useEffect(() => {
		document.title = `PeopleSol - Create Company Car`;
		return () => {
			document.title = "PeopleSol";
		};
	}, []);

	const { state } = useLocation();
	const [formValues, setFormValues] = useState(null);
	const navigate = useNavigate();
	const initialvalue = {};

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
		const payload = {};

		// create(payload);
	};

	const returnPage = () => {
		if (state?.returnUrl) navigate(state?.returnUrl);
		else navigate(-1);
	};
	const chooseFormValues = (values) => {
		setFormValues(values);
	};

	return (
		<section>
			<div>
				<Formik
					initialValues={initialvalue}
					// validationSchema={

					// }
					enableReinitialize
					onSubmit={onSubmit}
				>
					{(formik) => {
						chooseFormValues(formik.values);
						return (
							<Form>
								<div style={{ width: "100%" }} className="">
									<div className="createFootCust">
										<div>
											<button
												onClick={handleClose}
												className="createFooterButtonForm1"
												type="cancel"
											>
												Cancel
											</button>
										</div>
										<div>
											<button className="button primaryButton" type="submit">
												Update
											</button>
										</div>
									</div>
								</div>
							</Form>
						);
					}}
				</Formik>
			</div>
			<div>
				<img src={login} alt="" />
			</div>
		</section>
	);
};

export default LoginPage;
