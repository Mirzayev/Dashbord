import React from "react";
import Dashbord from '../components/Dashbord.jsx'
import Map from "../components/Map.jsx"
import {Outlet} from "react-router";
const AdminPage = () => {
    return (
        <div className="max-w-[1536px] mx-auto fixed top-0 left-0 right-0 bottom-0 flex">
            {/* Dashbord qismi */}
            <div className="bg-[#041025] basis-1/6 min-h-[100vh] text-white overflow-y-auto z-30">
                <Dashbord />
            </div>{/* Map qismi */}
            <div className="basis-5/6 min-h-[100vh]">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminPage;
