import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function UserLogin({ users, setIsLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("isLoggedIn") === "true") {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "İstifadəçi adı minimum 2 simvol olmalıdır.")
      .required("İstifadəçi adı zorunludur.")
      .test("is-valid-user", "İstifadəçi adı tapılmadı.", (value) => {
        return users.some((user) => user.name === value);
      }),
    password: Yup.string()
      .min(4, "Şifrə minimum 4 simvol olmalıdır.")
      .required("Şifrə zorunludur.")
      .test("is-valid-password", "Şifrə yanlışdır.", function (value) {
        const { name } = this.parent;
        const user = users.find((user) => user.name === name);
        return user ? user.password === value : false;
      }),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const user = users.find(
        (user) => user.name === values.name && user.password === values.password
      );

      if (user) {
        setIsLoggedIn(true);
        navigate("/", { replace: true });
      }
      resetForm();
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8 bg-white">
        <form onSubmit={formik.handleSubmit}>
          <div className="formLoginTitle text-center mb-4">
            <span className="text-2xl font-semibold">Daxil Ol</span>
          </div>
          <div className="space-y-6">
            <div>
              <label className="text-gray-800 text-xs mb-2 block">
                İstifadəçi adı
              </label>
              <input
                name="name"
                type="text"
                value={formik.values.name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className={`text-gray-800 bg-white border ${
                  formik.touched.name && formik.errors.name
                    ? "border-red-500"
                    : "border-gray-300"
                } w-full text-sm px-4 py-3 rounded-md outline-blue-500`}
                placeholder="name@mail.com"
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.name}
                </div>
              )}
            </div>
            <div>
              <label className="text-gray-800 text-xs mb-2 block">
                Şifrə
              </label>
              <input
                name="password"
                type="password"
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className={`text-gray-800 bg-white border ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : "border-gray-300"
                } w-full text-sm px-4 py-3 rounded-md outline-blue-500`}
                placeholder="******"
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.password}
                </div>
              )}
            </div>
          </div>
          <div className="mt-12">
            <button
              type="submit"
              className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-black"
            >
              Daxil Ol
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserLogin;
