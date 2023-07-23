import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollRestoration></ScrollRestoration>
            {/* <ToastContainer></ToastContainer> */}
        </div>
    );
};

export default Layout;