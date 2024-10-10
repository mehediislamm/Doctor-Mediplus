import slider1 from '../../../assets/Home/slider2.25fad811.jpg'
import slider2 from '../../../assets/Home/slider.f76040ee.jpg'
import slider3 from '../../../assets/Home/slider3.5dc7b668.jpg'
const Banner = () => {

    return (
        <div className='lg:mb-44'>
            {/* 1st div  */}
            <div className="carousel relative w-full md:relative lg:relative ">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero w-full bg-base-200  " style={{
                        backgroundImage: `url(${slider1})`,
                    }}>
                        <div className=" bg-cover bg-center"  >

                            <div className='md:ml-20 lg:ml-0 lg:pr-[550px]'>
                                <h1 className="lg:text-5xl md:text-3xl text-xl font-bold">We Provide <span className='text-[#4073D1]'>Medical</span> Services <br /> That You Can <span className='text-[#4073D1]'>Trust!</span> </h1>
                                <p className="py-6">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem <br />
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero bg-base-200  " style={{
                        backgroundImage: `url(${slider2})`,
                    }}>
                        <div className=" bg-cover bg-center"  >

                            <div className='md:ml-20 lg:ml-0 lg:pr-[550px]'>
                                <h1 className="lg:text-5xl md:text-3xl text-xl font-bold">We Provide <span className='text-[#4073D1]'>Medical</span> Services <br /> That You Can <span className='text-[#4073D1]'>Trust!</span> </h1>
                                <p className="py-6">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem <br />
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: `url(${slider3})`,
                        }}>

                        <div className='md:ml-20 lg:ml-0 lg:pr-[550px]'>
                            <h1 className="lg:text-5xl md:text-3xl text-xl font-bold">We Provide <span className='text-[#4073D1]'>Medical</span> Services <br /> That You Can <span className='text-[#4073D1]'>Trust!</span> </h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem <br />
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            {/* therr div  */}
            {/* div1 */}
            <div className='relative lg:absolute lg:top-[650px] lg:pl-44 lg:pr-44 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
            mt-10 md:mt-14
            '>
                {/* div 1 */}
                <div className='bg-[#4073D1] p-5'>
                    <h3 className='pt-7 pb-3 text-white'>Lorem Amet</h3>
                    <h3 className='pb-5 text-xl font-bold text-white'>Emergency Cases</h3>
                    <p className='pb-5 text-white'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptatem.
                    </p>
                    <button className='mb-5 btn uppercase btn-xs'>Learn more</button>
                </div>
                {/* div 2 */}
                <div className='bg-[#4073D1] p-5'>
                    <h3 className='pt-7 pb-3 text-white'>Lorem Amet</h3>
                    <h3 className='pb-5 text-xl font-bold text-white'>Emergency Cases</h3>
                    <p className='pb-5 text-white'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptatem.
                    </p>
                    <button className='mb-5 btn uppercase btn-xs'>Learn more</button>
                </div>
                {/* div 3 */}
                <div className='bg-[#4073D1] p-5'>
                    <h3 className='pt-7 pb-3 text-white'>Lorem Amet</h3>
                    <h3 className='pb-5 text-xl font-bold text-white'>Emergency Cases</h3>
                    <p className='pb-5 text-white'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptatem.
                    </p>
                    <button className='mb-5 btn uppercase btn-xs  '>Learn more</button>
                </div>
            </div>



        </div>
    );
};

export default Banner;