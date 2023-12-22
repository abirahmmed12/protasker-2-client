import { useEffect } from 'react';
import { FaHome, FaList, FaRegEdit, FaThLarge, FaUser } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      // Your useEffect logic
    }
  }, [user]);

  return (
    <div className="flex h-screen bg-gray-800">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-shrink-0 bg-gray-900 text-white w-64">
        <div className="flex flex-col justify-between w-full py-6">
          <div className="flex items-center justify-center">
            {/* Your logo or branding */}
            {/* <img src={logo1} className='w-12 rounded-full border-2' alt="" /> */}
            <p className="font-bold text-2xl text-blue-500">ProTasker</p>
          </div>
          <nav className="space-y-4">
            <NavLink
              to="/dashboard/taskManagement"
              className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white"
              activeClassName="bg-gray-700 text-white"
            >
              <FaThLarge className="text-2xl mr-2" />
              Manage Task
            </NavLink>
            <NavLink
              to="/dashboard/createNewTask"
              className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white"
              activeClassName="bg-gray-700 text-white"
            >
              <FaRegEdit className="text-2xl mr-2" />
              Add New Task
            </NavLink>
            <div className="divider"></div>
            <NavLink
              to="/dashboard/myProfile"
              className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white"
              activeClassName="bg-gray-700 text-white"
            >
              <FaUser className="text-2xl mr-2" />
              My Profile
            </NavLink>
            <NavLink
              to="/"
              className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white"
              activeClassName="bg-gray-700 text-white"
            >
              <FaHome className="text-2xl mr-2" />
              Home
            </NavLink>
          </nav>
        </div>
      </aside>

      {/* Content */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-8">
        <div className="container mx-auto">
          {/* Your content goes here */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
