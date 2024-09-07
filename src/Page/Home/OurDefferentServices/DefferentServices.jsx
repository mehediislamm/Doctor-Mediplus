
import { IoCaretForwardCircleOutline, IoHome, } from 'react-icons/io5';
import bgImage from '../../../assets/Home/fun-bg.b5af0dac.jpg'
import heart from '../../../assets/Home/section-img.webp'
import videoBg from '../../../assets/Home/video-bg.3c17842a.jpg'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaSmile, FaUserTie } from 'react-icons/fa';
import { FaTableCells } from 'react-icons/fa6';

const DefferentServices = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    return (
        <div className=''>
            <div className='mt-24   h-64 bg-cover bg-center' style={{
                backgroundImage: `url(${bgImage})`,
            }}>
                <div className='h-64 bg-[#4073D1] bg-opacity-60 '>
                    <div ref={ref} className=" max-w-screen-xl mx-auto pt-10 lg:pt-20 font-bold text-white">
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5'>
                            {/* 1st div */}
                            <div className='flex gap-6 items-center justify-center '>
                                <div className='w-20 h-20 rounded-full border  flex justify-center items-center '>
                                    <IoHome className='text-4xl' />
                                </div>
                                <div>
                                    <div className='text-4xl'>
                                        {inView ? (
                                            <CountUp
                                                start={0}
                                                end={3468}
                                                duration={5}
                                                key={inView}
                                            />
                                        ) : null}
                                    </div>
                                    <h3>Hospital Rooms</h3>
                                </div>
                            </div>

                            {/* 2nd div  */}

                            <div className='flex gap-6 items-center justify-center'>
                                <div className='w-20 h-20 rounded-full border  flex justify-center items-center '>

                                    <FaUserTie className='text-4xl' />
                                </div>
                                <div>
                                    <div className='text-4xl'>
                                        {inView ? (
                                            <CountUp
                                                start={0}
                                                end={557}
                                                duration={5}
                                                key={inView}
                                            />
                                        ) : null}
                                    </div>
                                    <h3>Specialist Doctors</h3>
                                </div>
                            </div>
                            <div className='flex gap-6 items-center justify-center'>
                                <div className='w-20 h-20 rounded-full border  flex justify-center items-center '>
                                    <FaSmile className='text-4xl' />
                                </div>
                                <div>
                                    <div className='text-4xl'>
                                        {inView ? (
                                            <CountUp
                                                start={0}
                                                end={4379}
                                                duration={5}
                                                key={inView}
                                            />
                                        ) : null}
                                    </div>
                                    <h3>Happy Patients</h3>
                                </div>
                            </div>
                            <div className='flex gap-6 items-center justify-center'>
                                <div className='w-20 h-20 rounded-full border  flex justify-center items-center '>
                                    <FaTableCells className='text-4xl' />

                                </div>
                                <div>
                                    <div className='text-4xl'>
                                        {inView ? (
                                            <CountUp
                                                start={0}
                                                end={100}
                                                duration={5}
                                                key={inView}
                                            />
                                        ) : null}
                                    </div>
                                    <h3>Years of Experience</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-24 max-w-screen-xl mx-auto'>
                <div className='text-center items-center'>
                    <h1 className='lg:text-3xl font-bold md:text-2xl pb-5'>We Are Always Ready to Help You & Your Family</h1>
                    <img className='mx-auto pb-4' src={heart} alt="" />
                    <p className='pb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, aut?</p>
                </div>
            </div>


            <div className='max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5  '>
                <div>
                    <div>
                        <h1 className='text-3xl font-bold pb-5'>Who We Are</h1>
                        <p className='w-16 bg-[#4073D1] h-[2px] mb-6'></p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Doloribus, porro? Placeat consequatur magni, similique eius
                            voluptas eos unde dolores aspernatur deleniti provident amet nesciunt corporis libero dolore sed quia, veritatis rem illum molestiae, <br /> <br />
                            qui ipsam laboriosam reprehenderit. Ipsa omnis officia odit molestiae culpa, nulla incidunt.</p>

                    </div>
                    {/* 2nd div  */}
                    <div className='mt-10  '>
                        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10'>
                            <div className=''>
                                <div className='items-center flex gap-2 '>
                                    <div className='w-[19px] h-[19px] rounded-full bg-[#4073D1]   '>
                                        <IoCaretForwardCircleOutline className='text-white text-xl border rounded-full ' />
                                    </div>
                                    <p>Maecenas vitae luctus nibh.</p>
                                </div>
                                <div className='items-center flex gap-2 '>
                                    <div className='w-[19px] h-[19px] rounded-full bg-[#4073D1]   '>
                                        <IoCaretForwardCircleOutline className='text-white text-xl border rounded-full ' />
                                    </div>
                                    <p>Maecenas vitae luctus nibh.</p>
                                </div>
                                <div className='items-center flex gap-2 '>
                                    <div className='w-[19px] h-[19px] rounded-full bg-[#4073D1]   '>
                                        <IoCaretForwardCircleOutline className='text-white text-xl border rounded-full ' />
                                    </div>
                                    <p>Maecenas vitae luctus nibh.</p>
                                </div>
                            </div>
                            <div>

                                <div className='items-center flex gap-2 '>
                                    <div className='w-[19px] h-[19px] rounded-full bg-[#4073D1]   '>
                                        <IoCaretForwardCircleOutline className='text-white text-xl border rounded-full ' />
                                    </div>
                                    <p>Maecenas vitae luctus nibh.</p>
                                </div>
                                <div className='items-center flex gap-2 '>
                                    <div className='w-[19px] h-[19px] rounded-full bg-[#4073D1]   '>
                                        <IoCaretForwardCircleOutline className='text-white text-xl border rounded-full ' />
                                    </div>
                                    <p>Maecenas vitae luctus nibh.</p>
                                </div>
                                <div className='items-center flex gap-2 '>
                                    <div className='w-[19px] h-[19px] rounded-full bg-[#4073D1]   '>
                                        <IoCaretForwardCircleOutline className='text-white text-xl border rounded-full ' />
                                    </div>
                                    <p>Maecenas vitae luctus nibh.</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div className='lg:pt-10'>
                    <img src={videoBg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default DefferentServices;