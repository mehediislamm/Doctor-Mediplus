import { FaAngleDown } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/Home/logo.f130af3e.svg'
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import useAuth from "../../hook/useAuth";
import acater from '../../assets/avater/man_5-512.webp'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { user, logOut } = useAuth();
    const navOption2 = <>
        <li><Link className="hover:text-white" to="/">Appointment</Link></li>
        <li><Link className="hover:text-white" to="/">Our Pricing</Link></li>
        <li><Link className="hover:text-white" to="/">About</Link></li>
        <li><Link className="hover:text-white" to="/">Faq</Link></li>


    </>

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOption = <>

        <li><Link className="hover:text-white" to="/">Home</Link></li>
        <li><Link className="hover:text-white" to="/"><div className="dropdown dropdown-hover">
            <Link to="/allDoctorList">
                <div tabIndex={0} role="button" className=" hover:text-white btn border-none btn-xs items-center ">
                    Doctor
                    <FaAngleDown />
                </div>
            </Link>
            <ul tabIndex={0} className="dropdown-content menu  bg-[#4073D1]  z-[1] w-52 p-2  ">
                {navOption2}
            </ul>
        </div>
        </Link></li>
        <li className="hover:text-white lg:pt-0 pt-36"><Link to="/services">Services</Link></li>
        <li><Link className="hover:text-white" to="/contact">Contact Us</Link></li>
        {
            user ? <> <button onClick={handleLogOut} className="btn btn-ghost btn-sm">Log Out</button></> : <> <li><Link className="hover:text-white" to="/login">Login</Link></li></>
        }


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
                                        className="menu h-96 menu-sm dropdown-content bg-[#4073D1] rounded-box z-[1] mt-3 w-64 p-2 shadow">
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
                                <div
                                    onClick={() => setIsOpen(!isOpen)}
                                    className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                                >
                                    <AiOutlineMenu />
                                    <div className='hidden md:block'>
                                        {/* Avatar */}
                                        <img
                                            className='rounded-full'
                                            referrerPolicy='no-referrer'
                                            src={user && user.photoURL ? user.photoURL : acater}
                                            alt='profile'
                                            height='30'
                                            width='30'
                                        />

                                    </div>
                                </div>

                                {isOpen && (
                                    <div className='absolute rounded-xl shadow-md w-[22vw] md:w-[22vw] lg:w-[12vw] bg-[#4073D1] overflow-hidden right-0 top-12 text-sm'>
                                        <div className='flex flex-col cursor-pointer md: py-5 lg:px-8 '>
                                            {
                                                user ? <h1 className="font-bold text-white text-center mb-2">{user.displayName}</h1> : null
                                            }
                                            <button className='md:hidden disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100  font-semibold rounded-full btn-xs transition'>
                                                <NavLink to={'/'}>Home</NavLink>
                                            </button>

                                            <button className='md:hidden disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 mb-2 font-semibold rounded-full btn-xs transition'>
                                                <NavLink to={'/apartment'}> Apartment</NavLink>
                                            </button>

                                            {
                                                user ? <Link to="/dashboard/myProfile"><button className="disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 font-semibold rounded-full btn-xs transitionml-4 ml-2 md:ml-14 lg:ml-7 mb-2">Dashboard</button></Link> : null



                                            }

                                            {
                                                user ? <button onClick={handleLogOut} className="btn btn-primary btn-xs text-white"> Sign Out </button> :
                                                    <Link to="/login">
                                                        <button className="disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 mb-2 font-semibold rounded-full btn-xs transition ml-5">Login</button>
                                                    </Link>
                                            }
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Navbar;