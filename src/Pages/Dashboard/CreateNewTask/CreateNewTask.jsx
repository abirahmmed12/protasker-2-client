
import { useForm } from "react-hook-form"
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/UseSuth";
import { useState } from "react";

// import { toast } from "react-toastify";
const CreateNewTask = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [selectedDate, setSelectedDate] = useState('');
    const {
        register,
        reset,
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        // console.log(data);
        const taskInfo = {
            userName: user.displayName,
            userEmail: user.email,
            task: data,
            taskStatus: 'todo',
            deadline:selectedDate
        }
        axiosPublic.post('/tasks', taskInfo)
            .then(res => {
                const result = res.data;
                console.log(result);
                if (result.acknowledged) {
                    reset();
                }
            })
    }

    return (
        <div>
            <div>
                <h1 className="text-4xl font-bold"> Welcome To Create A New Task</h1>
            </div>
            <div className=" mt-5 lg:mt-10">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 ">
                    <div className="flex justify-between items-center gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <select {...register("type")} className="input focus:border-2 focus:border-black w-full input-bordered select " required>
                                <option value='' >Select</option>
                                <option value="low">Low</option>
                                <option value="moderate">Mid</option>
                                <option value="high">High</option>
                            </select>
                            {/* <input type="text"  {...register("title", { required: true })} name="title" placeholder="Title" className="input w-full input-bordered" required /> */}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="date" onChange={(event) => setSelectedDate(event.target.value)} name="title" placeholder="Title" className="input w-full focus:border-2 focus:border-black input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text"  {...register("title", { required: true })} name="title" placeholder="Title" className="input  focus:border-2 focus:border-black input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea type="text" {...register("description", {
                            required: true,
                        })} placeholder="Description" name="description" className="input focus:border-2 focus:border-black h-40 input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <input className="text-black hover:text-white btn btn-sm bg-white hover:bg-black border-black hover:border-white" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateNewTask;