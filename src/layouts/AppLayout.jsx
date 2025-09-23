import {Outlet} from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../style/AppLayoutStyle.css"

function AppLayout(){
    return(
        <div className="layout">
            <Navbar/>
           <div className="page">
            <Outlet/>
            </div>
            
            <Footer/>
        </div>

    );
}
export default AppLayout;