import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import LogIn from "../Pages/login/Login";
import Profile from "../Pages/Profile/Profile";
import SingUp from "../Pages/SingUp/SingUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import TaskManagement from "../Pages/Dashboard/TaskManagement/TaskManagement";
import CreateNewTask from "../Pages/Dashboard/CreateNewTask/CreateNewTask";
import TaskManagementDetails from "../Pages/Dashboard/TaskManagement/TaskManagementDetails";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "login",
                element: <LogIn />,
            },
            {
                path: "profile",
                element: <PrivateRoute><Profile /></PrivateRoute>,
            },
            {
                path: "singup",
                element: <SingUp />,
            },
        ],
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/dashboard/taskManagement",
                element: <TaskManagement />,
            },
            {
                path: "/dashboard/taskManagement/:id",
                element: <TaskManagementDetails />,
            },
            {
                path: "/dashboard/myProfile",
                element: <Profile />,
            },
            {
                path: "/dashboard/createNewTask",
                element: <CreateNewTask />,
            },
        ]
    }

]);

export default router;