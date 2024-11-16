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
import { tempLogin } from "../../features/auth/authSlice";
import { CheckBoxCustom } from "../../components/FormComponent/CheckBoxCustom";
import { showToast } from "../../features/ToastSlice";
import axios from "axios";
import { CheckboxFormiks } from "../../components/FormComponent/CheckboxFormiks";

const RegisterPage = () => {
  useEffect(() => {
    document.title = `JobSeeker - Create Account`;
    return () => {
      document.title = "JobSeeker";
    };
  }, []);
  const { isTempLogin } = useSelector((state) => state.auth);

  const { state } = useLocation();
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(null);
  const [password, setPassword] = useState("password");
  const [selectedMode, setSelectedMode] = useState("employee");
  const navigate = useNavigate();
  const initialvalue = {
    fullName: "",
    userName: "",
    email: "",
    password: "",
    confirmpassword: "",
    termsAndConditions: "",
  };
  console.log("object formValues", formValues);
  const create = async (values) => {
    try {
      const result = await axios.post(
        "http://localhost:5513" + "/api/users/register",
        values
      );
      if (result) {
        dispatch(
          showToast({ text: "Successfully Created", severity: "success" })
        );
        dispatch(tempLogin(true));
        navigate("/home");
      }
    } catch (error) {
      dispatch(
        showToast({
          text: error?.response?.data?.message ?? "some error occured",
          severity: "error",
        })
      );
      dispatch(tempLogin(false));
    } finally {
    }
  };

  console.log("formValues", formValues);

  const onSubmit = (values) => {
    if (
      values?.password === values?.confirmpassword &&
      values?.termsAndConditions
    ) {
      const payload = { ...values, loginType: selectedMode };

      create(payload);
    } else if (!values?.termsAndConditions) {
      dispatch(
        showToast({
          text: "Please check Terms & Conditions to proceed",
          severity: "error",
        })
      );
    } else {
      dispatch(
        showToast({
          text: "Password should match",
          severity: "error",
        })
      );
    }
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
                    <div className="loginFont">Create account</div>
                    <div className="loginpFont">
                      Already have account?{" "}
                      <span
                        className="loginLinkColor cursor"
                        style={{ textDecoration: "none" }}
                        onClick={() => {
                          navigate("/auth/login");
                        }}
                      >
                        Log in
                      </span>
                    </div>
                    <div className="loginAs">
                      <div className="loginAsFont">create account for</div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          gap: "22px",
                        }}
                      >
                        {" "}
                        <div
                          className={`loginTabButton cursor ${
                            selectedMode === "candidate"
                              ? "activeLoginMode"
                              : ""
                          }`}
                          onClick={() => {
                            setSelectedMode("candidate");
                          }}
                        >
                          <img
                            style={{ height: "17px" }}
                            src={candidateLogin}
                            alt=""
                          />{" "}
                          <p className="loginTabButtonFont ">Candidate</p>
                        </div>{" "}
                        <div
                          className={`loginTabButton cursor ${
                            selectedMode === "employee" ? "activeLoginMode" : ""
                          }`}
                          onClick={() => {
                            setSelectedMode("employee");
                          }}
                        >
                          <img
                            style={{ height: "17px" }}
                            src={employerLogin}
                            alt=""
                          />{" "}
                          <p className="loginTabButtonFont">Employer</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div style={{ display: "flex", gap: "20px" }}>
                        <InputCustomFormik
                          name="fullName"
                          placeholder="Full Name"
                        />
                        <InputCustomFormik
                          name="userName"
                          placeholder="Username"
                        />
                      </div>
                      <InputCustomFormik
                        name="email"
                        placeholder="Email address"
                      />
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
                      <div className="password-container">
                        <InputCustomFormik
                          name="confirmpassword"
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
                      Create Account
                    </button>
                  </div>
                  <div
                    style={{
                      margin: "10px 0px",
                      textDecoration: "none",
                      color: "#656565",
                      display: "flex",
                      gap: "10px",
                    }}
                    className="loginLinkColor"
                  >
                    <CheckboxFormiks name="termsAndConditions" label="" /> I’ve
                    read and agree with your{" "}
                    <span className="loginLinkColor">Terms and Conditions</span>
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
                      <img
                        style={{ height: "50px" }}
                        src={signupFacebook}
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        style={{ height: "50px" }}
                        src={signupGoogle}
                        alt=""
                      />
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

export default RegisterPage;
