import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have A Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="container">
        <div className="row">
          <div className="panel panel-primary">
            <div className="panel panel-body mt-3 d-flex align-items-center justify-content-center">
              <form onSubmit={formik.handleSubmit}>
              <div className="form-group mb-3">
                <label for="email" className="form-label" htmlFor="email">
                  
                </label>
                <input
                  id="email"
                  name="email"
                  className="form-control ps-3 pe-5"
                  type="email"
                  placeholder="email@example.com"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email ? (
                  <small className="errors">{formik.errors.email}</small>
                ) : null}
              </div>
              </form>
              <button type="button" class="btn btn-primary ps-4 pe-4 ms-2">Submit</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
