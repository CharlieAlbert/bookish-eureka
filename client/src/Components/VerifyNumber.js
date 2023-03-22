import React from "react";
import "./SignupForm.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { formatPhoneNumber } from "react-phone-number-input";
import { formatPhoneNumberIntl } from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import en from "react-phone-number-input/locale/en";

const VerifyNumber = () => {
  const [value, setValue] = useState();

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log({ data });
  };

  const handleValidate = (value) => {
    const isValid = isValidPhoneNumber(value);
    console.log({ isValid });
    return isValid;
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="panel panel-primary">
          <div className="panel-body mt-3 d-flex align-items-center justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="sign-header text-center mb-2">
                Verify Your Phone Number
              </div>
              <div className="form-group mb-3">
                <label htmlFor="phone-input">Phone Number</label>

                <Controller
                  name="phone-input"
                  control={control}
                  rules={{
                    validate: (value) => handleValidate(value),
                  }}
                  render={({ field: { onChange, value } }) => (
                    <PhoneInput
                      labels={en}
                      placeholder="Enter Phone Number"
                      defaultCountry="KE"
                      className="form-control d-flex"
                      value={value}
                      onChange={(value) => setValue(value)}
                    />
                  )}
                />
                {
                  errors[
                    "phone-input" && (
                      <p className="error-message">Invalid Phone</p>
                    )
                  ]
                }
              </div>
              <button
                onSubmit={handleSubmit}
                type="button"
                className="btn btn-dark mb-3"
              >
                Send Code
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyNumber;
