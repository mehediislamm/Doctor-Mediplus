import heart from '../../../assets/Home/section-img.webp'
import blog1 from '../../../assets/Blogs/blog1.webp'
import blog2 from '../../../assets/Blogs/blog2.webp'
import blog3 from '../../../assets/Blogs/blog3.webp'
import client1 from '../../../assets/Services/client1.webp'
import client2 from '../../../assets/Services/client2.webp'
import client3 from '../../../assets/Services/client3.webp'
import client4 from '../../../assets/Services/client4.webp'
import client5 from '../../../assets/Services/client5.webp'
import bggImage from '../../../assets/Home/client-bg.dbc0f380.jpg'
import { useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';

const MedicalNews = () => {
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
        <div className=' w-full'>
            <div className='w-full'>
                <div className='text-center items-center mt-16 mb-7 '>
                    <h1 className='lg:text-3xl font-bold md:text-2xl pb-5'>Keep up with Our Most Recent Medical News.</h1>
                    <img className='mx-auto pb-4' src={heart} alt="" />
                    <p className='pb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, aut?</p>
                </div>


                <div className='w-full  max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {/* card 1  */}
                    <div className='group border rounded-md'>
                        <img className='w-full' src={blog1} alt="" />
                        <div className='p-7'>
                            <button className='mb-2 w-32 h-8 text-white bg-[#4073D1]'>15 Aug, 2020</button>
                            <h1 className='text-xl text-black pb-3'>We have announced our new product</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
                        </div>
                        <p className='w-0 h-[2px] bg-[#4073D1] transition-all duration-1000 group-hover:w-full'></p>
                    </div>
                    {/* card 1  */}
                    <div className='group border rounded-md'>
                        <img className='w-full' src={blog2} alt="" />
                        <div className='p-7'>
                            <button className='mb-2 w-32 h-8 text-white bg-[#4073D1]'>15 Aug, 2020</button>
                            <h1 className='text-xl text-black pb-3'>We have announced our new product</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
                        </div>
                        <p className='w-0 h-[2px] bg-[#4073D1] transition-all duration-1000 group-hover:w-full'></p>
                    </div>
                    {/* card 1  */}
                    <div className='group border rounded-md'>
                        <img className='w-full' src={blog3} alt="" />
                        <div className='p-7'>
                            <button className='mb-2 w-32 h-8 text-white bg-[#4073D1]'>15 Aug, 2020</button>
                            <h1 className='text-xl text-black pb-3'>We have announced our new product</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
                        </div>
                        <p className='w-0 h-[2px] bg-[#4073D1] transition-all duration-1000 group-hover:w-full'></p>
                    </div>
                </div>

                {/* auto scrolling section  */}

                <div className="mt-16 h-full bg-cover bg-center  "
                    style={{ backgroundImage: `url(${bggImage})` }}
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

            </div>

            {/* news letter sign up  */}

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
    );
};

export default MedicalNews;