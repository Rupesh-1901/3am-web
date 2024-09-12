import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Form, Formik } from "formik";
import login from "../assets/login.svg";
import logo from "../assets/logo.svg";
import { InputCustomFormik } from "../components/FormComponent/InputCustomFormik";

const LoginPage = () => {
  useEffect(() => {
    document.title = `Login`;
    return () => {
      document.title = "Login";
    };
  }, []);

  const { state } = useLocation();
  const [formValues, setFormValues] = useState(null);
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
    <section
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <div style={{ height: "100%" }}>
        <div>
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
                  <div style={{ width: "100%" }}>
                    <div>
                      <div>
                        <img src={logo} alt="logo" />
                      </div>
                      <div>
                        <div>Log In</div>
                        <div>Don&apos;t have an account? Create Now</div>
                        <div>
                          <div>Log in as</div>
                          <div>
                            {" "}
                            <div>Candidate</div> <div>Employer</div>
                          </div>
                        </div>
                        <div>
                          <InputCustomFormik
                            name="email"
                            placeholder="Email address"
                          />
                          <InputCustomFormik
                            name="password"
                            placeholder="password"
                            type={"password"}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="createFootCust">
                      <div>
                        <button
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
      </div>
      <div style={{ height: "100%", border: "1px black solid" }}>
        <img style={{ height: "100%", opacity: "0" }} src={login} alt="" />
      </div>
    </section>
  );
};

export default LoginPage;
