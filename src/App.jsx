import Footer from "./Pages/Home/Footer/Footer";
import PrimarySearchAppBar from "./Pages/Home/AppBar/Appbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div>
            <div>
                <PrimarySearchAppBar></PrimarySearchAppBar>
            </div>
            <div className="min-h-screen mt-0  ">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
            <ToastContainer />
        </div>
    );
};

export default App;