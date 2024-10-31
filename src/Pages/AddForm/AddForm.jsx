import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";
import { validationSchema } from "../../validation";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

const initialValues = {
  email: "",
  name: "",
  number: "",
  age: "",
  terms: false,
};

function AddForm({ setCustomers }) {
  const navigateAdd = useNavigate();
  const { values, handleSubmit, handleBlur, handleChange, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: (values, { resetForm }) => {
        setCustomers((prev) => [...prev, { ...values, id: nanoid() }]);
        resetForm();
        Swal.fire({
          title: "Success!",
          text: "Musteri Elave Edildi!",
          icon: "success",
        });
        navigateAdd("/", { replace: true });
      },
    });
  
    

  return (
    <div className="relative flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-[500px]  bg-white p-8 rounded shadow-md"
      >
        <p className="text-center font-bold mb-7 text-xl">Yeni Musteri</p>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className={`shadow-sm bg-gray-50 border ${
              touched.email && errors.email
                ? "border-red-500"
                : "border-gray-300"
            } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light`}
            placeholder="name@mail.com"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {touched.email && errors.email && (
            <div className="text-red-500 text-xs mt-1">{errors.email}</div>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="enter your name"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
            className={`shadow-sm bg-gray-50 border ${
              touched.name && errors.name ? "border-red-500" : "border-gray-300"
            } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light`}
          />
          {touched.name && errors.name && (
            <div className="text-red-500 text-xs mt-1">{errors.name}</div>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="number"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Number
          </label>
          <input
            type="number"
            id="number"
            name="number"
            value={values.number}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="enter your phone number"
            className={`shadow-sm bg-gray-50 border ${
              touched.number && errors.number
                ? "border-red-500"
                : "border-gray-300"
            } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light`}
          />
          {touched.number && errors.number && (
            <div className="text-red-500 text-xs mt-1">{errors.number}</div>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="age"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={values.age}
            placeholder="enter your age"
            onBlur={handleBlur}
            onChange={handleChange}
            className={`shadow-sm bg-gray-50 border ${
              touched.age && errors.age ? "border-red-500" : "border-gray-300"
            } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light`}
          />
          {touched.age && errors.age && (
            <div className="text-red-500 text-xs mt-1">{errors.age}</div>
          )}
        </div>

        <div className="">
          <div className="termsinput flex items-start m-1 ">
            <div className="flex items-center h-5">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                checked={values.terms}
                onChange={handleChange}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              />
            </div>
            <label
              htmlFor="terms"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Men Butun
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500 ml-2"
              >
                Kosullari ve Sertleri qebul edirem
              </a>
            </label>
          </div>
          {touched.terms && errors.terms && (
            <span className="text-red-500 text-xs mt-0">{errors.terms}</span>
          )}
        </div>

        <button
          type="submit"
          style={{ background: "black" }}
          className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 mt-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Əlavə et
        </button>
      </form>
    </div>
  );
}

export default AddForm;
