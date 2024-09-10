import { IoIosCloseCircle, IoIosCut } from 'react-icons/io';
import heart from '../../../assets/Home/section-img.webp'
import { FaCheckCircle, FaHeartbeat, FaTooth } from 'react-icons/fa';
import bggImage from '../../../assets/Home/testi-bg.3ba74bdb.jpg'
import AllDoctors from '../../../Sheard/AllDoctors/AllDoctors';


const ReasonablePrice = () => {
    return (
        <div className="   bg-[#F9F9F9]  mb-20">
            <div className='max-w-screen-lg mx-auto'>
                {/* common section   */}
                <div className=' text-center items-center mt-20 pt-20 pb-10'>
                    <h1 className='lg:text-3xl font-bold md:text-2xl pb-5'>We Offer Different Services To Improve Your Health</h1>
                    <img className='mx-auto pb-4' src={heart} alt="" />
                    <p className='pb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, aut?</p>
                </div>
                {/* price Section  */}

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    {/* card 1 */}
                    <div className='border pt-16 p-10 bg-[#FFFFFF]'>
                        <div className='text-center items-center'>
                            <div className='flex justify-center pb-4'>
                                <IoIosCut className='text-6xl text-[#4073D1]' />
                            </div>
                            <h2 className='text-xl font-bold '>Plastic Surgery</h2>
                            <div className='flex justify-center items-center pt-3 pb-16'>
                                <h1 className='text-4xl text-[#4073D1] font-bold'>$199  </h1>
                                <p>/per Visit</p>
                            </div>
                        </div>


                        <div>
                            <div className='flex justify-between'>
                                <p className='pb-4'>Lorem ipsum dolor sit</p>
                                <FaCheckCircle className='text-[#4073D1]' />
                            </div>
                            <div className='flex justify-between'>
                                <p className='pb-4'>Cubitur sollicitudin fentum</p>
                                <FaCheckCircle className='text-[#4073D1]' />
                            </div>
                            <div className='flex justify-between'>
                                <p className='pb-4'>Nullam interdum enim</p>
                                <IoIosCloseCircle className='text-[#AAAAAA]' />
                            </div>
                            <div className='flex justify-between'>
                                <p className='pb-4'>Donec ultricies metus</p>
                                <IoIosCloseCircle className='text-[#AAAAAA]' />
                            </div>
                            <div className='flex justify-between pb-6'>
                                <p className='pb-4'>Pellentesque eget nibh</p>
                                <IoIosCloseCircle className='text-[#AAAAAA]' />
                            </div >

                            <div>
                                <button className="relative h-10 w-full p-1 origin-top transform rounded-sm 
                                border-white bg-[#4073D1] text-white before:absolute before:top-0 
                               before:block before:h-0 before:w-full before:duration-500 hover:text-white 
                                hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full 
                               hover:before:bg-black">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className='border pt-16 p-10 bg-[#FFFFFF]'>
                        <div className='text-center items-center'>
                            <div className='flex justify-center pb-4'>
                                <FaTooth className='text-6xl text-[#4073D1]' />
                            </div>
                            <h2 className='text-xl font-bold '>Teeth Whitening</h2>
                            <div className='flex justify-center items-center pt-3 pb-16'>
                                <h1 className='text-4xl text-[#4073D1] font-bold'>$299  </h1>
                                <p>/per Visit</p>
                            </div>
                        </div>


                        <div >
                            <div className='flex justify-between'>
                                <p className='pb-4'>Lorem ipsum dolor sit</p>
                                <FaCheckCircle className='text-[#4073D1]' />
                            </div>
                            <div className='flex justify-between'>
                                <p className='pb-4'>Cubitur sollicitudin fentum</p>
                                <FaCheckCircle className='text-[#4073D1]' />
                            </div>
                            <div className='flex justify-between'>
                                <p className='pb-4'>Nullam interdum enim</p>
                                <FaCheckCircle className='text-[#4073D1]' />
                            </div>
                            <div className='flex justify-between'>
                                <p className='pb-4'>Donec ultricies metus</p>
                                <IoIosCloseCircle className='text-[#AAAAAA]' />
                            </div>
                            <div className='flex justify-between pb-6'>
                                <p className='pb-4'>Pellentesque eget nibh</p>
                                <IoIosCloseCircle className='text-[#AAAAAA]' />
                            </div >

                            <div>
                                <button className="relative h-10 w-full p-1 origin-top transform rounded-sm 
                                border-white bg-[#4073D1] text-white before:absolute before:top-0 
                               before:block before:h-0 before:w-full before:duration-500 hover:text-white 
                                hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full 
                               hover:before:bg-black">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className='border pt-16 p-10 bg-[#FFFFFF]'>
                        <div className='text-center items-center'>
                            <div className='flex justify-center pb-4'>
                                <FaHeartbeat className='text-6xl text-[#4073D1]' />
                            </div>
                            <h2 className='text-xl font-bold '>Heart Surgery</h2>
                            <div className='flex justify-center items-center pt-3 pb-16'>
                                <h1 className='text-4xl text-[#4073D1] font-bold'>$199  </h1>
                                <p>/per Visit</p>
                            </div>
                        </div>


                        <div className=''>
                            <div className='flex justify-between'>
                                <p className='pb-4'>Lorem ipsum dolor sit</p>
                                <FaCheckCircle className='text-[#4073D1]' />
                            </div>
                            <div className='flex justify-between'>
                                <p className='pb-4'>Cubitur sollicitudin fentum</p>
                                <FaCheckCircle className='text-[#4073D1]' />
                            </div>
                            <div className='flex justify-between'>
                                <p className='pb-4'>Nullam interdum enim</p>
                                <FaCheckCircle className='text-[#4073D1]' />
                            </div>
                            <div className='flex justify-between'>
                                <p className='pb-4'>Donec ultricies metus</p>
                                <FaCheckCircle className='text-[#4073D1]' />
                            </div>
                            <div className='flex justify-between pb-6'>
                                <p className='pb-4'>Pellentesque eget nibh</p>
                                <FaCheckCircle className='text-[#4073D1]' />
                            </div >

                            <div>
                                <button className="relative h-10 w-full p-1 origin-top transform rounded-sm 
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
            </div>

            {/* background Section  */}
            <div>

                <div className="mt-16 h-full bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: `url(${bggImage})` }}
                >
                    <div className='h-full  bg-[#4073D1] bg-opacity-60'>
                        <div className='max-w-screen-xl mx-auto text-center items-center
                     pt-16 text-white
                    '>
                            <div className='text-center items-center mt-16'>
                                <h1 className='lg:text-3xl font-bold md:text-2xl pb-5'>We Have Specialist Doctors To Solve Your Problems</h1>
                                <img className='mx-auto pb-4' src={heart} alt="" />
                                <p className='pb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, aut?</p>
                            </div>
                            <div className=' '>
                                <AllDoctors></AllDoctors>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ReasonablePrice;