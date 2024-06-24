"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import ToggleSwitch from "@/components/common/switch";
import CustomButton from "@/components/common/submit_button";

// Validation schema
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  rememberMe: Yup.boolean(),
});

export default function Login() {
  const initialValues = {
    email: "",
    rememberMe: false,
  };

  const handleSubmit = (values: { email: string; rememberMe: boolean }) => {
    console.log("Form values:", values);
    // Add your database submission logic here
  };

  return (
    <main className="bg-dealguru-white z-0  px-4 2xl:px-x-pad md:px-8 w-full mt-16 3xl:w-[1900px] 3xl:m-auto md:mt-22 lg:pt-14 flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-9 gap-4 w-full max-w-[1900px]">
        <div className="md:col-span-5 max-w-[400px] mx-auto flex flex-col gap-8 justify-center items-center  mt-16 md_lg:mt-0">
          <h1 className="text-[32px] leading-3 font-bold">
            Välkommen till DealGuru
          </h1>
          <button className="flex gap-2 justify-center bg-[#3b5998] text-white py-4 px-4 rounded-lg w-full md:w-full text-sm font-semibold">
            <Image
              width={20}
              height={20}
              alt="Search Icon"
              src={"/assets/svg/login_facebook.svg"}
            />
            Fortsätt med Facebook
          </button>
          <button className="flex gap-2 justify-center bg-[#DD4B39] text-white py-4 px-4 rounded-lg w-full md:w-full text-sm font-semibold">
            <Image
              width={20}
              height={20}
              alt="Search Icon"
              src={"/assets/svg/login_google.svg"}
            />
            Fortsätt med Google
          </button>
          <div className="w-full flex flex-col items-center justify-center">
            <hr className="w-full" />
            <span className=" -top-2.5 relative text-[12px] px-2 abs bg-white">
              Eller
            </span>
          </div>
          <div className="w-full gap-3 flex flex-col -mt-4">
            <Formik
              initialValues={initialValues}
              validationSchema={LoginSchema}
              onSubmit={handleSubmit}
            >
              {({ values, setFieldValue }) => (
                <Form className="w-full flex flex-col gap-3">
                  <div>
                    <Field
                      name="email"
                      placeholder="E-mail"
                      className="w-full bg-[#FAFBFE] pl-10 pr-4 py-4 border rounded-lg"
                      style={{
                        backgroundImage: `url('/assets/svg/email.svg')`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "left 10px center",
                      }}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="flex items-center w-full">
                    <ToggleSwitch
                      checked={values.rememberMe}
                      onChange={(checked) =>
                        setFieldValue("rememberMe", checked)
                      }
                    />
                  </div>
                  <CustomButton text="Fortsätt" type="submit" />
                </Form>
              )}
            </Formik>
            <p className="text-gray-600 text-sm text-center">
              By registering, you agree to our membership terms and privacy
              policy.
            </p>
          </div>
        </div>
        <div className="md:col-span-4 flex justify-center items-center md:mt-0 mt-4">
          <Image
            src="/assets/images/login-right-side.png"
            alt="Right side image"
            layout="responsive"
            width={400}
            height={600}
            className="rounded"
          />
        </div>
      </div>
    </main>
  );
}
