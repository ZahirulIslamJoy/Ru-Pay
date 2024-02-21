import React, { useContext,  useState } from "react";
import { useForm } from "react-hook-form";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { AuthContext } from "../providers/AuthProviders";
const Login = () => {
   
    const [showPassword, setShowPassword] = useState(false);
    const {signInWithEP}=useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
        const  email=data.email;
        const password=data.password;
        signInWithEP(email,password)
        .then((user)=>{
            console.log(user);
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
  }




  return (
    <div>
      <h1 className="text-center text-3xl mt-12">Login!!!</h1>
      <div className="w-1/2  mt-12 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
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
              <p className="text-red-500 text-sm">Email is required</p>
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
                })}
                type={showPassword ? "text" : "password"}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
                placeholder="Enter Your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
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
          </div>
          <button
            type="submit"
            className="text-white mt-5 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
