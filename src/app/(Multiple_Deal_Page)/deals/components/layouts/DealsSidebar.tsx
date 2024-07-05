import Sidebar_Components from "../common/Sidebar_Component";
import Deal_Page_Sidebar from "../modules/Deal_Page_Sidebar";


const DealsSidebar = () => {

    return (
        <div className={` md_lg:flex hidden flex-col gap-4 border-white rounded-lg w-full  col-span-2 `}>
            <Deal_Page_Sidebar />


        </div>
    );
};

export default DealsSidebar;
