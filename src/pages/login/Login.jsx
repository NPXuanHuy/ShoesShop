import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import FacebookLogin from "react-facebook-login";
import { Formik, Form } from "formik";
import Input from "../../components/input/Input.jsx";
import * as Yup from "yup";
import { loginApi } from "../../redux/reducers/userReducer.jsx";

const Login = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(true);
  const { profile } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
//   const responseFacebook = (response) => {
//     console.log(response);
//   };
  useEffect(() => {}, []);
  return (
    <div>
    <section className="login">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .required("email cannot be blank !")
              .email("email is invalid !"),
            password: Yup.string().required("password cannot be blank !"),
          })}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(false);
            resetForm({
              email: "",
              password: "",
            });
            // call api
            const actionsAsync = loginApi(values);
            await dispatch(actionsAsync);

            navigate("/profile");
          }}
        >
          {({ isSubmitting }) => (
            <Form className="form-group">
              <h2 className="title">Login</h2>
              <div className="mt-5">
                <Input
                  className="form-control"
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                ></Input>
              </div>

              <div className="form-password mt-5">
                <Input
                  className="form-control"
                  id="password"
                  name="password"
                  type={showPassword ? "password" : "text"}
                  label="Password"
                  placeholder="Enter your password"
                ></Input>
                <i
                  className={
                    showPassword
                      ? "form-eye fa-solid fa-eye-slash"
                      : "form-eye fa-solid fa-eye"
                  }
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                ></i>
              </div>
              <div className="form-bottom">
                <NavLink className="form-text" to="/register">
                  Register now ?
                </NavLink>
                <button
                  className="form-login"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
    </section>
    </div>
  );
};

export default Login;