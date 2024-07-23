import React from "react";
import Sidebar_Components from "../common/Sidebar_Component";


const Deal_Page_Sidebar = () => {
    return (
        <div className="">
            <h1 className="flex h-11 items-end font-bold text-[1.5rem] no-italic text-dealguru-black ">
                Flest röster just nu
            </h1>
            <div className=" shadow-lg shadow-gray-200  bg-dealguru-white w-full rounded-lg  mt-3">
                <Sidebar_Components />
                <Sidebar_Components />
                <Sidebar_Components />
                <Sidebar_Components />
                <Sidebar_Components />
            </div>
        </div>
    );
};

export default Deal_Page_Sidebar;
