import { IoCall } from "react-icons/io5";
import CoverImage from "../../Sheard/CoverImage/CoverImage";
import Maps from "../../Sheard/Maps/Maps";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosClock } from "react-icons/io";


const ContactUs = () => {
    return (
        <div>
            <CoverImage heading="Contact Us"
                subHeading="Home>Contact Us"
            ></CoverImage>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-7 max-w-screen-xl mx-auto">
                <div>
                    {/* <Maps></Maps> */}
                </div>
                <div>
                    <div>
                        <h1 className="text-3xl font-bold pb-2 ">Contact With Us</h1>
                        <p className="w-10 h-1 bg-[#4073D1] "></p>
                        <p className="pt-3">If you have any questions please fell free to contact with us.</p>
                    </div>
                    <form action="">

                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 pt-5 ">
                            <div>
                                <input
                                    type="text"
                                    placeholder="name"
                                    className="input input-bordered input-primary w-full  " />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="email"
                                    className="input input-bordered input-primary w-full " />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="phone"
                                    className="input input-bordered input-primary w-full " />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="subject"
                                    className="input input-bordered input-primary w-full  " />
                            </div>
                        </div>
                        <textarea className=" mt-5 textarea textarea-bordered w-full lg:w-full" placeholder="Your message"></textarea>

                        <button type="submit" className="relative mt-6 h-12 w-full p-1 origin-top transform rounded-sm 
                                border-white bg-[#4073D1] text-white before:absolute before:top-0 
                               before:block before:h-0 before:w-full before:duration-500 hover:text-white 
                                hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full 
                               hover:before:bg-black">
                            Send
                        </button>
                    </form>
                </div>
            </div>

            <div className="pb-20 max-w-screen-xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
                {/* div1 */}
                <div className="rounded-md flex justify-center text-white text-center items-center gap-3 bg-[#4073D1] h-40">
                    <div>
                        <IoCall className="text-4xl" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">
                            +(000) 1234 56789
                        </h1>
                        <p>info@company.com</p>
                    </div>
                </div>
                {/* div1 */}
                <div className="rounded-md  flex justify-center text-white text-center items-center gap-3 bg-[#4073D1] h-40">
                    <div>
                        <FaLocationDot className="text-4xl" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">
                            2 Fir e Brigade Road
                        </h1>
                        <p>Chittagonj, Lakshmipur</p>
                    </div>
                </div>
                {/* div1 */}
                <div className="rounded-md  flex justify-center text-white text-center items-center gap-3 bg-[#4073D1] h-40">
                    <div className="">
                        <IoIosClock className="text-4xl" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">
                            Mon - Sat: 8am - 5pm
                        </h1>
                        <p>Sunday Closed</p>
                    </div>
                </div>

            </div>

            <div>
            <div className='bg-[#EEF2FF] text-center pt-20 pb-20'>
                        <div>
                            <h1 className='text-xl font-bold pb-2'>Sign up for newsletter</h1>
                            <p>Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu,
                                homero alterum.</p>
                        </div>
                        <div className='mt-5 flex justify-center flec gap-4'>
                            <input
                                type="text"
                                placeholder="Type here"
                                className=" input input-bordered input-primary w-full max-w-xs" />
                            <button className="relative h-12 w-32 p-1 origin-top transform rounded-sm 
                                border-white bg-[#4073D1] text-white before:absolute before:top-0 
                               before:block before:h-0 before:w-full before:duration-500 hover:text-white 
                                hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full 
                               hover:before:bg-black">
                                Book Now
                            </button>
                        </div>
                    </div>
            </div>

        </div>
    );
};

export default ContactUs;