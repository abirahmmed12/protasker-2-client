import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/UseSuth";

const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { googleSignIn, signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      toast.success("Successfully Logged In", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark", // Updated theme to dark
      });
      navigate(location?.state ? location.state : "/");
    });
  };

  const handleSocial = () => {
    googleSignIn().then((result) => {
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      console.log(userInfo);
      navigate(location?.state ? location.state : "/");
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg">
        <h1 className="text-3xl font-bold text-center">Welcome Back!</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              name="email"
              placeholder="email@gmail.com"
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-white"
            />
            {errors.email && (
              <p className="text-red-600">Email is required</p>
            )}
          </div>
          <div className="space-y-1">
            <label htmlFor="password" className="text-sm font-semibold">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="••••••••"
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-white"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <input
                id="remember"
                type="checkbox"
                className="form-checkbox text-blue-500"
                required=""
              />
              <label htmlFor="remember" className="ml-2 text-sm">
                Remember me
              </label>
            </div>
            <Link
              to="#"
              className="text-sm font-medium text-primary-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <div>
            <input
              className="btn w-full"
              type="submit"
              value="Sign In"
            />
          </div>
          <p>Don&apos;t have an account please! <Link to="/singup" className="font-bold text-yellow-600 hover:underline">Sing Up</Link> </p>
        </form>
        <div className="text-center">
          <h1 className="text-xl font-bold">Log in With</h1>
        </div>
        <div className="grid grid-cols-1">
          <button
            className="btn w-full bg-red-600 text-white"
            onClick={handleSocial}
          >
            <FaGoogle /> Log in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
