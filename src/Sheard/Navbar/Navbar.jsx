import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../../assets/Home/logo.f130af3e.svg'

const Navbar = () => {
    const navOption2 = <>


        <li><Link className="hover:text-[#4073D1]" to="/">About</Link></li>
        <li><Link className="hover:text-[#4073D1]" to="/">Appointment</Link></li>
        <li><Link className="hover:text-[#4073D1]" to="/">Our Pricing</Link></li>
        <li><Link className="hover:text-[#4073D1]" to="/">Faq</Link></li>


    </>

    const navOption = <>

        <li><Link className="hover:text-[#4073D1]" to="/">Home</Link></li>
        <li><Link className="hover:text-[#4073D1]" to="/"><div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className=" hover:text-[#4073D1] btn border-none btn-xs items-center ">
                Doctor
                <FaAngleDown />
            </div>
            <ul tabIndex={0} className="dropdown-content menu  bg-base-100  z-[1] w-52 p-2  ">
                {navOption2}
            </ul>
        </div>
        </Link></li>
        <li className="hover:text-[#4073D1] lg:pt-0 pt-36"><Link to="/">Services</Link></li>
        <li><Link className="hover:text-[#4073D1]" to="/">Contac t Us</Link></li>

    </>


    return (
        <div>
            <div className="relative">
                <div className="bg-[#4073D1] bg-opacity-30 w-full fixed z-10">
                    <div className="max-w-screen-xl mx-auto text-white">
                        <div className="navbar">
                            <div className="navbar-start">
                                <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                        <svg
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
                                        </svg>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu h-96 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-64 p-2 shadow">
                                        {navOption}
                                    </ul>
                                </div>
                                <a className="btn btn-ghost text-xl">
                                    <img src={logo} alt="" />
                                </a>
                            </div>
                            <div className="navbar-center hidden lg:flex">
                                <ul className="menu menu-horizontal px-1">
                                    {navOption}
                                </ul>
                            </div>
                            <div className="navbar-end">
                                <a className="btn">Button</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;