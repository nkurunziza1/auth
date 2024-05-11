"use client";
import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { loginSchema } from "@/app/_validations/auth.validation";
import { handleLogin } from "@/app/_api/login";




const Login = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <div
        className={`relative 
         flex min-h-screen items-center justify-center bg-[url(/assets/images/auth.jpeg)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16`}
      >
        <div className="relative w-full max-w-[870px] rounded-md bg-white">
          <div className="relative flex flex-col justify-center rounded-md  px-6 py-20 backdrop-blur-lg dark:bg-black/50 lg:min-h-[758px]">
            <div className="mx-auto w-full max-w-[440px]">
              <div className="mb-10">
                <h1 className="text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl">
                  Sign in
                </h1>
                <p className="text-base font-bold leading-normal text-white-dark">
                  Enter your email and password to login
                </p>
              </div>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={loginSchema}
                onSubmit={async (values, { setSubmitting }) => {
                  try {
                    const response = await handleLogin(setLoading, values);
                  } catch (error) {
                    console.log("error", error);
                  } finally {
                    setSubmitting(false);
                  }
                }}
              >
                {({ errors, submitCount, touched, values }) => (
                  <Form className="space-y-5 dark:text-white">
                    <div>
                      <label htmlFor="email">Email</label>
                      <div
                        className={` ${
                          submitCount
                            ? errors.email
                              ? "has-error"
                              : "has-success"
                            : ""
                        } relative text-white-dark`}
                      >
                        <Field
                          name="email"
                          type="email"
                          id="email"
                          placeholder="Enter Email"
                          className="p-2 border w-full ring-1  rounded-md outline-none "
                        />
                        {submitCount ? (
                          errors.email ? (
                            <div className="mt-1 text-danger">
                              {errors.email}
                            </div>
                          ) : (
                            <div className="mt-1 text-success">Looks Good!</div>
                          )
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="password">Password</label>
                      <div
                        className={` ${
                          submitCount
                            ? errors.password
                              ? "has-error"
                              : "has-success"
                            : ""
                        }relative w-full text-white-dark`}
                      >
                        <Field
                          name="password"
                          type="password"
                          id="password"
                          placeholder="Enter Password"
                          className="p-2 border  w-full ring-1  rounded-md outline-none "
                        />{" "}
                        {submitCount ? (
                          errors.password ? (
                            <div className="mt-1 text-danger">
                              {errors.password}
                            </div>
                          ) : (
                            <div className="mt-1 text-success">Looks Good!</div>
                          )
                        ) : (
                          ""
                        )}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className=" p-4 bg-primary rounded-md  text-white !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]"
                    >
                      {loading ? "Logging in..." : "  Sign in"}
                    </button>
                    <p>Don't have an account register <span className="text-primary">here</span></p>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
