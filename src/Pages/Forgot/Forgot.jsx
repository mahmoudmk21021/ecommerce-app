import React, { useContext, useState } from "react";
import { userContext } from "../../Context/User.Context";
import * as Yup from "yup";
import Login from "../Login/Login";
import { Formik, useFormik } from "formik";
import toast from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";

// export default function Forgot() {
//   const { token, setToken } = useContext(userContext);
//   const validationSchema = Yup.object({
//     email: Yup.string()
//       .required("email is required")
//       .email("email is not valid"),
//   });

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("email is required")
      .email("email is not valid"),
  });

  async function handleForgotPassword(values) {
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
        method: "POST",
        data: "email",
      };

      const { data } = await axios.request(options);
      console.log(data);
      setMessage("Password reset instructions have been sent to your email.");
      setError("");
    } catch (error) {
      setError("Failed to send password reset instructions. Please try again.");
      setMessage("");
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema,
    onSubmit: handleForgotPassword,
  });

  return (
    <>
      <section>
        <h2 className="text-2xl font-bold text-primary mb-6">
          <i className="fa-regular fa-circle-user me-3"></i>
          <span>please enter your verification code</span>
        </h2>
        <form
          action=""
          className="flex flex-col gap-4"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <input
              type="email"
              className="form-control w-full"
              placeholder="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              //   onChange={(e) => setEmail(e.target.value)}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="text-red-600 font-semi mt-2 ">
                * {formik.errors.email}
              </div>
            ) : (
              ""
            )}
          </div>

          <Link
            to="/auth/ResetPassword"
            type="submit"
            onClick={handleForgotPassword}
            className="btn-primary text-center"
          >
            Verify
          </Link>
          {message && <p>{message}</p>}
          {error && <p>{error}</p>}
        </form>
      </section>
    </>
  );
}
