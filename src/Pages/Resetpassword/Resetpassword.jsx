import axios from "axios";
import { Formik, useFormik } from "formik";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { userContext } from "../../Context/User.Context";
import Forgot from "./../Forgot/Forgot";
import Login from "./../Login/Login";

export default function Resetpassword() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-primary mb-6">
        <i className="fa-regular fa-circle-user me-3"></i>
        <span>reset your account password</span>
      </h2>
      <form action="" className="flex flex-col gap-4">
        <div>
          <input
            type="text"
            className="form-control w-full"
            placeholder="code"
            name="password"
          />

          <div className="text-red-600 font-semi mt-2 "></div>

          <div className="text-red-600 font-semi mt-2 "></div>
        </div>

        <Link to="/auth/ResetNewPassword" type="submit" className="btn-primary">
          Verify
        </Link>
      </form>
    </section>
  );
}
