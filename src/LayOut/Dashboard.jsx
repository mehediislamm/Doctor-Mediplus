import { CgProfile } from "react-icons/cg";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex min-h-screen mx-auto ">
            <div className="md:w-48 md:bg-[#F9F9F9]">

                <div className="hidden md:block">
                    <li className="mb-3">
                        <NavLink className="hover:text-white text-black " to="/dashboard/myProfile">
                            <button className="  disabled:cursor-not-allowed cursor-pointer hover:bg-[#4073D1] py-3 px-4 text-sm font-semibold   transition flex items-center gap-3 w-full ">  <CgProfile className="   text-[#63CAB9]" size={20}></CgProfile>  My Profile </button>
                        </NavLink>
                    </li>
                </div>
                <div className="md:hidden lg:hidden block">
                    <div className="drawer">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content p-5">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className=" "><svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg></label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                {/* Sidebar content here */}
                                <li><a>Sidebar Item 1</a></li>
                                <li><a>Sidebar Item 2</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;