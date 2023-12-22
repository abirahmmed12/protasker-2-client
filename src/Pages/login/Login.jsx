import { useForm } from "react-hook-form"

// import loginImage from "../../assets/logIn.jpg"
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
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success(' Successfully Logged In', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate(location?.state ? location.state : "/");
            })
    }

    const handleSocial = () => {
        googleSignIn()
            .then(result => {
                // console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                }
                console.log(userInfo);
                navigate(location?.state ? location.state : "/");

            })
    }
    return (
        <div className="min-h-screen container mx-auto flex justify-center items-center w-full">
            <div className="flex justify-between items-center gap-3">
                <div className=" hidden lg:block lg:w-3/5">
                    <img src='https://github.com/Asif3359/Forum-System/blob/main/src/assets/logIn.jpg?raw=true' className="w-4/5" alt="" />
                </div>
                <div className="space-y-3 flex-1">
                    <div >
                        <h1 className="text-3xl font-bold">Please Join Us</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 ">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"  {...register("email", { required: true })} name="email" placeholder="email@gmail.com" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                            })} placeholder="••••••••" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}

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
                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn  btn-sm" type="submit" value="Sign Up" />
                        </div>
                        <p>Don&apos;t have an account please! <Link to="/singup" className="font-bold text-yellow-600 hover:underline">Sing Up</Link> </p>
                        <div className="text-center">
                            <h1 className="text-xl font-bold">Log in With</h1>
                        </div>
                        <div className="divider"></div>


                    </form>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <button className="btn btn-sm" onClick={handleSocial}> <FaGoogle /> Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;