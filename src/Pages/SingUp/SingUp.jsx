import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import useAuth from "../../Hooks/UseSuth";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [fireBaseError, setFireBaseError] = useState("");

  const { googleSignIn, createUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setFireBaseError("");
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
              badgeType: "Bronze",
            };
            console.log(loggedUser, userInfo);
            navigate(location?.state ? location.state : "/");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        setFireBaseError(error.message);
      });
  };

  const handleSocial = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          badgeType: "Bronze",
        };
        console.log(userInfo);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setFireBaseError(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg">
        <h1 className="text-3xl font-bold text-center">Join Us</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              name="name"
              placeholder="Your Name"
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-white"
            />
            {errors.name && (
              <span className="text-red-600">Name is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              {...register("photoURL", { required: true })}
              name="photoURL"
              placeholder="Your Photo Url"
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-white"
            />
            {errors.photoURL && (
              <span className="text-red-600">Photo URL is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              name="email"
              placeholder="email@gmail.com"
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-white"
            />
            {errors.email && (
              <span className="text-red-600">Email is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              placeholder="••••••••"
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-white"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">Password must be 6 characters</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-600">Password must be less than 20 characters</p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Password must have one Uppercase, one lowercase, one number, and one special character.
              </p>
            )}
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="remember" aria-describedby="remember" type="checkbox" className=" " required="" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
              </div>
            </div>
            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
              Forgot password?
            </a>
          </div>
          <div className="form-control mt-6">
            <input className="btn w-full" type="submit" value="Sign Up" />
          </div>
          {fireBaseError && (
            <p className="text-red-500">{fireBaseError}</p>
          )}
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="font-bold text-yellow-600 hover:underline">
              Log In
            </Link>
          </p>
        </form>
        <div className="text-center">
          <h1 className="text-xl font-bold">Log in With</h1>
        </div>
        <div className="grid grid-cols-1">
          <button className="btn w-full bg-red-600 text-white" onClick={handleSocial}>
            <FaGoogle /> Log in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
