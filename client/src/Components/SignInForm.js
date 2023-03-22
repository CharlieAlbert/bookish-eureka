import React from "react";
import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Yup from "yup";
import "./SignupForm.css";

const SignInForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Password is required")
        .min(5, "Your password is too short")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
      confirmpassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords do not match"
      ),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="panel panel-primary">
          <div className="panel-body mt-3 d-flex align-items-center justify-content-center">
            <form onSubmit={formik.handleSubmit}>
              <div className="sign-header text-center mb-2">Sign In</div>
              <div className="form-group mb-3">
                <label for="email" className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  className="form-control"
                  type="email"
                  placeholder="email@example.com"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <small className="errors">{formik.errors.email}</small>
                ) : null}
              </div>

              <div className="form-group mb-3">
                <label for="password" htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <small className="errors">{formik.errors.password}</small>
                ) : null}
              </div>
              <div className="mt-3">
                <button type="button" className="btn btn-dark mb-3">
                  Sign In
                </button>
                <button type="button" className="btn btn-light mb-3">
                  <FontAwesomeIcon
                    icon="fa-brands fa-google"
                    className="pe-3"
                  />
                  Continue with Google
                </button>
                <button type="button" className="btn btn-light mb-3">
                  <FontAwesomeIcon icon="fa-brands fa-apple" className="pe-3" />
                  Continue with Apple
                </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
