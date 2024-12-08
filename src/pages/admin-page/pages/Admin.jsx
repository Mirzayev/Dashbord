import React from "react";
import Dashbord from "../components/Dashbord.jsx";
import { Outlet } from "react-router";

const AdminPage = () => {
    return (
        <div className="max-w-[1536px] mx-auto  top-0 left-0 right-0 bottom-0 flex flex-col lg:flex-row">

            <div className="bg-[#041025] basis-1/6 min-h-[100vh] text-white overflow-y-auto z-30 hidden lg:block">
                <Dashbord />
            </div>

            <div className="basis-5/6 min-h-[100vh]">
                <Outlet />
            </div>

            <div className="lg:hidden fixed bottom-0 left-0 w-full bg-[#041025] text-white z-50 shadow-lg">
                <Dashbord mobile />
            </div>
        </div>
    );
};

export default AdminPage;
