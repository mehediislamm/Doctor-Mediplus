import { Link } from "react-router-dom";

const Navbar = () => {

    // const navOption = <>

    //     <li><Link to="/">Home</Link></li>
    //     <li><Link to="/">Home</Link></li>
    //     <li><Link to="/">Home</Link></li>

    // </>

    return (
        <div>

            <div className="drawer  bg-base-300">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    {/* Navbar */}
                    <div className="navbar  w-full max-w-screen-xl mx-auto">
                        <div className="flex-none ">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-6 w-6 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </label>
                        </div>
                        <div className="mx-2 flex-1   px-2">Mediplush
                        </div>

                        <div className="gap-9">
                            <button className="btn btn-xs">Home</button>
                            <button className="btn btn-xs">Doctors</button>
                            <button className="btn btn-xs">Services</button>
                            <button className="btn btn-xs">Blogs</button>
                        </div>

                    </div>
                    {/* Page content here */}



                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;