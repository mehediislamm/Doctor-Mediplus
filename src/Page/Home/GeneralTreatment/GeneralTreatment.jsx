import { FaTooth } from 'react-icons/fa';
import heart from '../../../assets/Home/section-img.webp'
import { PiNotepadBold } from 'react-icons/pi';
import { AiFillHeart } from 'react-icons/ai';
import { BsEar } from 'react-icons/bs';
import { IoEyeSharp } from 'react-icons/io5';
import { BiSolidDonateBlood } from 'react-icons/bi';
import bggImage from '../../../assets/Home/testi-bg.3ba74bdb.jpg'
import { useEffect } from 'react';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import testi1 from '../../../assets/Home/testi1.webp'
import testi2 from '../../../assets/Home/testi2.webp'
import testi3 from '../../../assets/Home/testi3.webp'

const GeneralTreatment = () => {
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
        <div className='mt-32'>
            <div className='text-center items-center mt-16'>
                <h1 className='lg:text-3xl font-bold md:text-2xl pb-5'>We Offer Different Services To Improve Your Health</h1>
                <img className='mx-auto pb-4' src={heart} alt="" />
                <p className='pb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, aut?</p>
            </div>

            {/* treatement section  */}

            <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
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

            {/* bg image section  */}

            <div className="mt-16 h-full bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url(${bggImage})` }}
            >
                <div className='h-full  bg-[#4073D1] bg-opacity-60'>
                    <div className='max-w-screen-xl mx-auto text-center items-center
                    lg:w-[550px] pt-16 text-white
                    '>
                        <div className='text-center items-center mt-16'>
                            <h1 className='lg:text-3xl font-bold md:text-2xl pb-5'>We Offer Different Services To Improve Your Health</h1>
                            <img className='mx-auto pb-4' src={heart} alt="" />
                            <p className='pb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, aut?</p>
                        </div>

                    </div>

                    {/* card slider  */}
                    <div ref={sliderRef} className="keen-slider pb-24 max-w-screen-xl mx-auto">
                        {/* card 1 */}
                        <div className="keen-slider__slide number-slide1">
                            <div className='relative w-full h-44 border bg-white text-black'>
                                <p className='p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quasi ex
                                    officiis atque voluptates, rerum reprehenderit.</p>
                                <div className='flex pl-4 items-center'>
                                    <img src={testi1} alt="" />
                                    <h2 className='pl-3 font-bold'>sakill hossain</h2>
                                </div>

                            </div>
                        </div>
                        {/* card 1 */}
                        <div className="keen-slider__slide number-slide2">
                            <div className='relative w-full h-44 border bg-white text-black'>
                                <p className='p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quasi ex
                                    officiis atque voluptates, rerum reprehenderit.</p>
                                <div className='flex pl-4 items-center'>
                                    <img src={testi2} alt="" />
                                    <h2 className='pl-3 font-bold'>Taniya Rahaman</h2>
                                </div>

                            </div>
                        </div>
                        {/* card 1 */}
                        <div className="keen-slider__slide number-slide3">
                            <div className='relative w-full h-44 border bg-white text-black'>
                                <p className='p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quasi ex
                                    officiis atque voluptates, rerum reprehenderit.</p>
                                <div className='flex pl-4 items-center'>
                                    <img src={testi3} alt="" />
                                    <h2 className='pl-3 font-bold'>Eva Islam</h2>
                                </div>

                            </div>
                        </div>
                        {/* card 1 */}
                        <div className="keen-slider__slide number-slide4">
                            <div className='relative w-full h-44 border bg-white text-black'>
                                <p className='p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quasi ex
                                    officiis atque voluptates, rerum reprehenderit.</p>
                                <div className='flex pl-4 items-center'>
                                    <img src={testi1} alt="" />
                                    <h2 className='pl-3 font-bold'>sakill hossain</h2>
                                </div>

                            </div>
                        </div>
                        {/* card 1 */}
                        <div className="keen-slider__slide number-slide5">
                            <div className='relative w-full h-44 border bg-white text-black'>
                                <p className='p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quasi ex
                                    officiis atque voluptates, rerum reprehenderit.</p>
                                <div className='flex pl-4 items-center'>
                                    <img src={testi2} alt="" />
                                    <h2 className='pl-3 font-bold'>Taniya Rahaman</h2>
                                </div>

                            </div>
                        </div>
                        {/* card 1 */}
                        <div className="keen-slider__slide number-slide6">
                            <div className='relative w-full h-44 border bg-white text-black'>
                                <p className='p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quasi ex
                                    officiis atque voluptates, rerum reprehenderit.</p>
                                <div className='flex pl-4 items-center'>
                                    <img src={testi3} alt="" />
                                    <h2 className='pl-3 font-bold'>Eva Islam</h2>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default GeneralTreatment;