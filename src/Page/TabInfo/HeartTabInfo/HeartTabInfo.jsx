/* eslint-disable react/prop-types */
import { Player } from '@lottiefiles/react-lottie-player';
import lottefiels from '../../../../public/Animation - 1726751382414.json'
import { FaCheckCircle, FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const HeartTabInfo = ({ Heart }) => {
    console.log(Heart);
    return (
        <div>
            {
                Heart?.map(HeartData => <div key={HeartData._id}>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6'>
                        <div>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                                <div>
                                    <h2 className='text-xl font-bold'>{HeartData?.Heart}</h2>
                                    <p className='w-10 h-1 bg-black'></p>

                                    <p className='pt-5'>Experience: <span className='text-[#4073D1]'>{HeartData?.Heart_exprience}</span></p>
                                    <p className='pt-5'>  <span className='text-[#4073D1] flex items-center gap-2'>
                                        <FaLocationArrow className='text-xl'></FaLocationArrow>
                                        {HeartData?.Heart_location}
                                    </span></p>
                                </div>

                                <div className='flex justify-center items-center'>
                                    <Player
                                        className='w-48 my-4'
                                        autoplay
                                        loop
                                        src={lottefiels}
                                    />
                                </div>
                            </div>



                            <p className='pb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra ante vel est lobortis, a commodo magna rhoncus.
                                In quis nisi non quam pharetra commodo.</p>
                            <div className='flex items-center gap-2 text-[#4073D1]'>
                                <FaCheckCircle />
                                <p>Maecenas vitae luctus nibh. Curabitur pharetra luctus est, sit amet aliquam ex posuere id.</p>
                            </div>
                            <div className='flex items-center gap-2 text-[#4073D1]'>
                                <FaCheckCircle />
                                <p>Maecenas pharetra ante vel est lobortis.</p>
                            </div>
                            <div className='flex items-center gap-2 text-[#4073D1]'>
                                <FaCheckCircle />
                                <p>Lorem ipsum dolor sit amet, consectetur..</p>
                            </div>

                            <div>
                                <Link to="/allHeartDoctor">
                                    <button className=" mt-10 relative h-12 w-32 p-1 origin-top transform rounded-md 
                                                  border-white bg-[#4073D1] text-white before:absolute before:top-0 
                                                    before:block before:h-0 before:w-full before:duration-500 hover:text-white 
                                                     hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full 
                                                     hover:before:bg-black">
                                        Doctor details
                                    </button>
                                </Link>

                            </div>

                        </div>


                        {/* image section  */}
                        <div className=' '>

                            <img className='w-full rounded-md' src={HeartData?.Heart_doctor_image} alt="" />
                        </div>

                    </div>
                </div>)
            }
        </div>
    );
};

export default HeartTabInfo;