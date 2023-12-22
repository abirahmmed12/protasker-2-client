import { useEffect} from 'react';
import {  FaHome, FaList, FaRegEdit, FaThLarge, FaUser, } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
// import logo1 from "../../../assets/logo1.jpg"
// import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const Dashboard = () => {

    const { user } = useContext(AuthContext);

    // const axiosPublic = useAxiosPublic();
    // const [feedBack, setFeedback] = useState([])
    // const [ourUser, setOurUser] = useState({})

    useEffect(() => {
        if (user?.email) {
            // console.log(user.email);

            // axiosPublic.get(`/feedback/${user.email}`)
            //     .then(res => {
            //         // console.log("Feedback", res.data)
            //         setFeedback(res.data);
            //     })

            // axiosPublic.get(`/users/${user.email}`)
            //     .then(res => {
            //         // console.log(res.data)
            //         setOurUser(res.data);
            //     })
        }

    }, [user])
    return (
        <div className="drawer md:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content px-3">
                {/* Page content here */}
                <div className='flex justify-between items-center'>
                    <div className='md:hidden'>
                        <h1>QnOption</h1>
                    </div>
                    <label htmlFor="my-drawer-2" className="btn  drawer-button md:hidden"><FaList /></label>
                </div>
                <div className=''>
                    <Outlet></Outlet>
                </div>


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className=' min-h-full bg-black py-10 w-4/5 md:w-80'>
                    <div className='flex flex-col justify-start items-center gap-3'>
                        {/* <img src={logo1} className='w-12 rounded-full border-2' alt="" /> */}
                        <p className='font-bold text-2xl text-blue-500'>Task Management </p>
                    </div>
                    <ul className="menu p-4  space-y-2 text-white   ">
                        <li><NavLink to="/dashboard/taskManagement"> <span className='text-2xl mr-2'><FaThLarge /></span> Manage Task </NavLink></li>
                        <li><NavLink to="/dashboard/createNewTask"> <span className='text-2xl mr-2'><FaRegEdit /></span> Add New Task</NavLink></li>
                        <div className='divider'></div>
                        <li><NavLink to="/dashboard/myProfile"> <span className='text-2xl mr-2'><FaUser /></span> My Profile </NavLink></li>
                        <li><NavLink to="/"> <span className='text-2xl mr-2'><FaHome /> </span> Home</NavLink></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;