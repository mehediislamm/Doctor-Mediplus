import { BiSolidDonateBlood } from "react-icons/bi";
import CoverImage from "../../Sheard/CoverImage/CoverImage";
import { IoEyeSharp } from "react-icons/io5";
import { BsEar } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { FaTooth } from "react-icons/fa";
import { PiNotepadBold } from "react-icons/pi";
import { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import client1 from '../../assets/Services/client1.webp'
import client2 from '../../assets/Services/client2.webp'
import client3 from '../../assets/Services/client3.webp'
import client4 from '../../assets/Services/client4.webp'
import client5 from '../../assets/Services/client5.webp'
import bggImagee from '../../assets/Home/client-bg.dbc0f380.jpg'


const Services = () => {
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        rtl: false,
        slides: {
            perView: 3, // Default for large screens
            spacing: 10,
        },
        breakpoints: {
            "(max-width: 1024px)": { // For medium screens (md)
                slides: { perView: 2, spacing: 10 },
            },
            "(max-width: 768px)": { // For small screens (sm)
                slides: { perView: 1, spacing: 10 },
            },
        },
    });


    // Use useEffect to implement the 4-second interval for sliding
    useEffect(() => {
        const interval = setInterval(() => {
            if (slider.current) {
                slider.current.next(); // Move to the next slide
            }
        }, 4000); // 4000 milliseconds = 4 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [slider]);
    return (
        <div>
            <CoverImage heading="Service" subHeading="Home > Service"></CoverImage>
            <div className='pt-20 pb-20 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {/* div1  */}
                <div className='flex gap-5 items-center'>

                    <PiNotepadBold className='text-7xl text-[#4073D1]' />
                    <div>
                        <h1 className='pb-2 text-xl font-bold hover:text-[#4073D1]'>General Treatment</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec luctus dictum eros ut imperdiet.</p>
                    </div>
                </div>
                {/* div2  */}
                <div className='flex gap-5 items-center'>
                    <FaTooth className='text-7xl text-[#4073D1]' />
                    <div>
                        <h1 className='pb-2 text-xl font-bold hover:text-[#4073D1]'>Teeth Whitening</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec luctus dictum eros ut imperdiet.</p>
                    </div>
                </div>
                {/* div3 */}
                <div className='flex gap-5 items-center'>

                    <AiFillHeart className='text-7xl text-[#4073D1]' />
                    <div>
                        <h1 className='pb-2 text-xl font-bold hover:text-[#4073D1]'>Heart Surgery</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec luctus dictum eros ut imperdiet.</p>
                    </div>
                </div>
                {/* div4  */}
                <div className='flex gap-5 items-center'>
                    <BsEar className='text-7xl text-[#4073D1]' />

                    <div>
                        <h1 className='pb-2 text-xl font-bold hover:text-[#4073D1]'>Ear Treatment</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec luctus dictum eros ut imperdiet.</p>
                    </div>
                </div>
                {/* div5  */}
                <div className='flex gap-5 items-center'>

                    <IoEyeSharp className='text-7xl text-[#4073D1]' />

                    <div>
                        <h1 className='pb-2 text-xl font-bold hover:text-[#4073D1]'>Vision Problems</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec luctus dictum eros ut imperdiet.</p>
                    </div>
                </div>
                {/* div6  */}
                <div className='flex gap-5 items-center'>

                    <BiSolidDonateBlood className='text-7xl text-[#4073D1]' />
                    <div>
                        <h1 className='pb-2 text-xl font-bold hover:text-[#4073D1]'>Blood Transfusion</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec luctus dictum eros ut imperdiet.</p>
                    </div>
                </div>
            </div>


            <div>
                <div className="mt-5 mb-10 h-full bg-cover bg-center  "
                    style={{ backgroundImage: `url(${bggImagee})` }}
                >
                    <div className='     bg-[#4073D1] bg-opacity-60'>


                        {/* card slider  */}
                        <div ref={sliderRef} className="keen-slider gird grid-cols-1     max-w-screen-xl mx-auto ">
                            {/* card 1 */}
                            <div className="keen-slider__slide number-slide1 flex justify-center items-center pt-20 pb-20 ">
                                <img className='h-16' src={client1} alt="" />
                            </div>
                            {/* card 1 */}
                            <div className="keen-slider__slide number-slide2 flex justify-center items-center pt-20 pb-20  ">
                                <img className='h-16' src={client2} alt="" />
                            </div>
                            {/* card 1 */}
                            <div className="keen-slider__slide number-slide3 flex justify-center items-center pt-20 pb-20  ">
                                <img className='h-16' src={client3} alt="" />
                            </div>
                            {/* card 1 */}
                            <div className="keen-slider__slide number-slide4 flex justify-center items-center pt-20 pb-20  ">
                                <img className='h-16' src={client4} alt="" />
                            </div>
                            {/* card 1 */}
                            <div className="keen-slider__slide number-slide5 flex justify-center items-center pt-20 pb-20  ">
                                <img className='h-16' src={client5} alt="" />
                            </div>
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
        </div>
    );
};

export default Services;