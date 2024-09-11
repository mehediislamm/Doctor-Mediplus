import { useEffect } from 'react';
import bggImage from '../../../assets/Home/call-bg.d960f04e.jpg'
import heart from '../../../assets/Home/section-img.webp'
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import slideCard from '../../../assets/Home/pf2.webp'
import slideCard1 from '../../../assets/Home/pf3.webp'
import slideCard3 from '../../../assets/Home/pf4.webp'


const RulesMaintain = () => {
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        rtl: false,
        slides: {
            perView: 4, // Default for large screens
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
            <div className="mt-16 h-80 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url(${bggImage})` }}
            >
                <div className='h-80  bg-[#4073D1] bg-opacity-60'>
                    <div className='max-w-screen-lg mx-auto text-center items-center
                    lg:w-[550px] pt-16 text-white
                    '>
                        <h1 className='md:pb-4 text-3xl font-bold'>Do you need Emergency Medical Care? Call @ 1234 56789</h1>
                        <p className='md:pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor dictum turpis nec gravida.</p>
                        <div className='flex gap-5 justify-center'>
                            <button className="relative h-10 w-32 p-1 origin-top transform rounded-sm   border-white bg-white  text-[#4073D1] before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-[#4073D1]">Contanct Now</button>
                            <button className="relative h-10 w-32 p-1 origin-top transform rounded-sm   border-white bg-white  text-[#4073D1] before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-[#4073D1]">Contanct Now</button>

                        </div>

                    </div>
                </div>

            </div>
            {/* common div */}

            <div className='text-center items-center mt-16'>
                <h1 className='lg:text-3xl font-bold md:text-2xl pb-5'>We Maintain Cleanliness Rules Inside Our Hospital</h1>
                <img className='mx-auto pb-4' src={heart} alt="" />
                <p className='pb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, aut?</p>
            </div>

            {/* card slider section  */}

            <div>
                <div ref={sliderRef} className="keen-slider ">
                    <div className="keen-slider__slide number-slide1 group relative">
                        {/* Image Section */}
                        <div className='relative'>
                            <img className='w-full' src={slideCard} alt="Slide 1" />
                        </div>

                        {/* Hidden Div with Button */}
                        <div className='hidden group-hover:flex top-0 left-0 absolute items-center 
                               justify-center bg-[#4073D1] bg-opacity-60 w-full h-full'>
                              <button className="relative h-10 w-32 p-1 origin-top transform rounded-sm 
                                border-white bg-white text-[#4073D1] before:absolute before:top-0 
                               before:block before:h-0 before:w-full before:duration-500 hover:text-white 
                                hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full 
                               hover:before:bg-[#4073D1]">
                                Contact Now
                            </button>
                        </div>
                    </div>
                    {/* card 1  */}

                    <div className="keen-slider__slide number-slide1 group relative">
                        {/* Image Section */}
                        <div className='relative'>
                            <img className='w-full' src={slideCard1} alt="Slide 1" />
                        </div>

                        {/* Hidden Div with Button */}
                        <div className='hidden group-hover:flex top-0 left-0 absolute items-center 
                               justify-center bg-[#4073D1] bg-opacity-60 w-full h-full'>
                              <button className="relative h-10 w-32 p-1 origin-top transform rounded-sm 
                                border-white bg-white text-[#4073D1] before:absolute before:top-0 
                               before:block before:h-0 before:w-full before:duration-500 hover:text-white 
                                hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full 
                               hover:before:bg-[#4073D1]">
                                Contact Now
                            </button>
                        </div>
                    </div>

                    {/* card 2 */}

                    <div className="keen-slider__slide number-slide1 group relative">
                        {/* Image Section */}
                        <div className='relative'>
                            <img className='w-full' src={slideCard3} alt="Slide 1" />
                        </div>

                        {/* Hidden Div with Button */}
                        <div className='hidden group-hover:flex top-0 left-0 absolute items-center 
                               justify-center bg-[#4073D1] bg-opacity-60 w-full h-full'>
                              <button className="relative h-10 w-32 p-1 origin-top transform rounded-sm 
                                border-white bg-white text-[#4073D1] before:absolute before:top-0 
                               before:block before:h-0 before:w-full before:duration-500 hover:text-white 
                                hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full 
                               hover:before:bg-[#4073D1]">
                                Contact Now
                            </button>
                        </div>
                    </div>

                    {/* card 3 */}

                    <div className="keen-slider__slide number-slide1 group relative">
                        {/* Image Section */}
                        <div className='relative'>
                            <img className='w-full' src={slideCard} alt="Slide 1" />
                        </div>

                        {/* Hidden Div with Button */}
                        <div className='hidden group-hover:flex top-0 left-0 absolute items-center 
                               justify-center bg-[#4073D1] bg-opacity-60 w-full h-full'>
                              <button className="relative h-10 w-32 p-1 origin-top transform rounded-sm 
                                border-white bg-white text-[#4073D1] before:absolute before:top-0 
                               before:block before:h-0 before:w-full before:duration-500 hover:text-white 
                                hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full 
                               hover:before:bg-[#4073D1]">
                                Contact Now
                            </button>
                        </div>
                    </div>

                    {/* card 4 */}

                    <div className="keen-slider__slide number-slide1 group relative">
                        {/* Image Section */}
                        <div className='relative'>
                            <img className='w-full' src={slideCard1} alt="Slide 1" />
                        </div>

                        {/* Hidden Div with Button */}
                        <div className='hidden group-hover:flex top-0 left-0 absolute items-center 
                               justify-center bg-[#4073D1] bg-opacity-60 w-full h-full'>
                              <button className="relative h-10 w-32 p-1 origin-top transform rounded-sm 
                                border-white bg-white text-[#4073D1] before:absolute before:top-0 
                               before:block before:h-0 before:w-full before:duration-500 hover:text-white 
                                hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full 
                               hover:before:bg-[#4073D1]">
                                Contact Now
                            </button>
                        </div>
                    </div>

                    {/* card 5 */}
                    
                    <div className="keen-slider__slide number-slide1 group relative">
                        {/* Image Section */}
                        <div className='relative'>
                            <img className='w-full' src={slideCard3} alt="Slide 1" />
                        </div>

                        {/* Hidden Div with Button */}
                        <div className='hidden group-hover:flex top-0 left-0 absolute items-center 
                               justify-center bg-[#4073D1] bg-opacity-60 w-full h-full'>
                              <button className="relative h-10 w-32 p-1 origin-top transform rounded-sm 
                                border-white bg-white text-[#4073D1] before:absolute before:top-0 
                               before:block before:h-0 before:w-full before:duration-500 hover:text-white 
                                hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full 
                               hover:before:bg-[#4073D1]">
                                Contact Now
                            </button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default RulesMaintain;