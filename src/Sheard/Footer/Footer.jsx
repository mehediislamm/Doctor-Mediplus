import { FaCaretRight, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#3A67BC] pt-14 ">
            <footer className="max-w-screen-xl mx-auto  ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <nav className="text-white">
                        <h6 className="text-xl font-bold pb-2">About Us</h6>
                        <p className="h-1 w-10 bg-white mb-5"></p>
                        <p>Lorem ipsum dolor sit am consectetur adipisicing elit do
                            eiusmod tempor incididunt ut labore dolore magna.</p>
                    </nav>
                    <nav className="text-white">
                        <h6 className="text-xl font-bold pb-2">Quick Links</h6>
                        <p className="h-1 w-10 bg-white mb-5"></p>
                        <div className="flex gap-9">
                            <div className=" ">
                                <div className="flex items-center pb-2">
                                    <FaCaretRight />
                                    <a className="link link-hover"> Home</a>
                                </div>
                                <div className="flex items-center pb-2">
                                    <FaCaretRight />
                                    <a className="link link-hover">About Us</a>
                                </div>
                                <div className="flex items-center pb-2">
                                    <FaCaretRight />
                                    <a className="link link-hover">Services</a>
                                </div>
                                <div className="flex items-center pb-2">
                                    <FaCaretRight />
                                    <a className="link link-hover">Our Cases</a>
                                </div>
                                <div className="flex items-center">
                                    <FaCaretRight />
                                    <a className="link link-hover">Other Links</a>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center pb-2">
                                    <FaCaretRight />
                                    <a className="link link-hover"> Consuling</a>
                                </div>
                                <div className="flex items-center pb-2">
                                    <FaCaretRight />
                                    <a className="link link-hover">Finance</a>
                                </div>
                                <div className="flex items-center pb-2">
                                    <FaCaretRight />
                                    <a className="link link-hover">Testimonials</a>
                                </div>
                                <div className="flex items-center pb-2">
                                    <FaCaretRight />
                                    <a className="link link-hover">FAQ</a>
                                </div>
                                <div className="flex items-center">
                                    <FaCaretRight />
                                    <a className="link link-hover">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <nav className="text-white">
                        <h6 className="text-xl font-bold pb-2">Open Hours
                        </h6>
                        <p className="h-1 w-10 bg-white mb-5"></p>
                        <p>Lorem ipsum dolor sit ame consectetur adipisicing elit do eiusmod tempor incididunt.</p>
                        <div className="flex gap-10 pt-4">
                            <div>
                                <p>Monday-Friday</p>
                                <p>Saturday</p>
                                <p>Monday-Thusday</p>
                            </div>
                            <div>
                                <p>8.00-9.00</p>
                                <p>9.00-10.00</p>
                                <p>10.00-11.00</p>
                            </div>
                        </div>
                    </nav>
                    <form className="text-white">
                        <h6 className=" text-xl font-bold pb-2">Newsletter</h6>
                        <p className="h-1 w-10 bg-white mb-5"></p>
                        <p>subscribe to our newsletter to get allour news in your inbox..
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>

                        <div className=" flex items-center text-white pt-4">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered w-full rounded" />
                            <div className="text-3xl text-[#4073D1] bg-white items-center  p-2 flex  border border-l-0 h-12">
                                <FaTelegramPlane />
                            </div>
                        </div>

                    </form>
                </div>
                
            </footer>
            <footer className="footer footer-center text-white bg-[#4073D1] p-4 mt-16">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;