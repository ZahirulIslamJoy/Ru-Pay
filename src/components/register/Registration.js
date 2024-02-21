import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const Registration = () => {
  const [selectedValue, setSelectedValue] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const handleTypeChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedValue(selectedValue);
  };


  console.log(selectedValue);
  return (
    <div>
      <h1 className="text-center text-3xl mt-12">Welcome To RuPay</h1>
      <div className="w-1/2  mt-12 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block mb-2 text-sm font-medium text-blac">
            Account Type
          </label>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            {...register("type")}
            onChange={handleTypeChange}
          >
            <option value="student">Student</option>
            <option value="other">Other</option>
          </select>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-black">
              Full Name*
            </label>
            <input
              {...register("name", {
                pattern: {
                  value: /^[A-Za-z\s]+$/i,
                  message:
                    "Please enter a valid name without any numbers or special characters",
                },
                required: "Full name is required",
              })}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          {
            selectedValue === "student" ? <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-black">
              Student Id*
            </label>
            <input
              {...register("studentId", {
                required:true,
              })}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Your Student Id"
            />
            {errors.studentId && (
              <p className="text-red-500 text-sm">Student Id Card Is Required</p>
            )}
          </div> :<div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-black">
              National Id Card No*
            </label>
            <input
              {...register("nid", {
                required:true,
              })}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Your Nid"
            />
            {errors.nid && (
              <p className="text-red-500 text-sm">NId Card No Is Required</p>
            )}
          </div>
          }
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-black">
              Phone No*
            </label>
            <input
              {...register("phoneNo", {
                pattern: {
                  value: /^\+?[0-9]+$/,
                  message: "Please enter a valid phone number",
                },
                required: "Phone number is required",
              })}
              type="tel"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Your Phone No"
            />
            {errors.phoneNo && (
              <p className="text-red-500 text-sm">{errors.phoneNo.message}</p>
            )}
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-black">
              Email*
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Your Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">Email is required"</p>
            )}
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-black">
              Password*
            </label>
            <div className="relative">
              <input
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[A-Z])(?=.*[@#$%!*^&+=~]).{6,}$/,
                })}
                type={showPassword ? "text" : "password"}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
                placeholder="Enter Your password"
              />
              <button
                type="button"
                onClick={()=>setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-3 py-2 bg-gray-200 rounded-r-md focus:outline-none"
              >
                {showPassword ? (
                  <BsFillEyeFill></BsFillEyeFill>
                ) : (
                  <BsFillEyeSlashFill></BsFillEyeSlashFill>
                )}
              </button>
            </div>
            {errors.password?.type === "required" && (
              <p className="text-red-600 text-sm" role="alert">
                Password is required
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600 text-sm" role="alert">
                Password must Contains One Uppercase and a Special Character and
                six Character Long{" "}
              </p>
            )}
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-black">
             Confirm Password*
            </label>
            <div className="relative">
              <input
                {...register("confirmPassword", {
                  required: true,
                })}
                type={showConfirmPassword ? "text" : "password"}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
                placeholder="Confirm Password"
              />
              <button
                type="button"
                onClick={()=>setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-3 py-2 bg-gray-200 rounded-r-md focus:outline-none"
              >
                {showConfirmPassword ? (
                  <BsFillEyeFill></BsFillEyeFill>
                ) : (
                  <BsFillEyeSlashFill></BsFillEyeSlashFill>
                )}
              </button>
            </div>
            {errors.confirmPassword?.type === "required" && (
              <p className="text-red-600 text-sm" role="alert">
               Confirm password is required
              </p>
            )}
          </div>
          <button
            type="submit"
            className="text-white mt-5 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none "
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
