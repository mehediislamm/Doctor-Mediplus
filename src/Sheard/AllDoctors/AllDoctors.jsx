import { useEffect, useState } from 'react';
import Doctor from '../../assets/Doctor/team1.webp'
import Doctor1 from '../../assets/Doctor/team2.webp'
import Doctor2 from '../../assets/Doctor/team3.webp'
import Doctor3 from '../../assets/Doctor/team4.webp'
import { Link } from 'react-router-dom';
import { FaGraduationCap } from 'react-icons/fa';

const AllDoctors = () => {
    const [Alldata, setAllData] = useState();


    useEffect(() => {
        fetch('http://localhost:5000/AllData')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, []);
    // console.log(Alldata);

    const Heart = Alldata?.slice(0, 1).filter(data => data?.category === 'heart');
    const Neurology = Alldata?.slice(0, 6).filter(data => data?.category === 'neurology');
    const Teeth = Alldata?.slice(0, 2).filter(data => data?.category === 'dentist');
    const Orthopedagogy = Alldata?.slice(0, 8).filter(data => data?.category === 'orthopendagogy');

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-28 pt-10'>
            {/* div 1 */}
            {
                Heart?.map(data => <div key={data._id} className='  '>
                    <div className='group relative'>
                        <div className='relative'>
                            <img className='w-full h-[400px] bg-cover' src={data?.Heart_doctor_image} alt="Slide 1" />
                        </div>

                        {/* Hidden Div with Button */}
                        <div className='hidden group-hover:flex top-0 left-0 absolute items-center 
                   justify-center bg-[#FFFEFF] bg-opacity-60 w-full h-full'>
                            <Link to="/allDoctorList">
                                <button className="relative h-10 w-40 p-1 origin-top transform rounded-sm 
                    border-white bg-[#4073D1] text-white before:absolute before:top-0 
                    before:block before:h-0 before:w-full before:duration-500 hover:text-white 
                    hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full 
                    hover:before:bg-black">
                                    Get Appointment
                                </button>
                            </Link>
                        </div>

                    </div>
                    <div className='text-center bg-white text-black pt-5  pb-7'>
                       
                        <h1 className='text-xl font-bold'>{data?.Heart_doctor_name}</h1>
                        <div className='flex items-center justify-center gap-2'>
                            <FaGraduationCap className='text-xl text-[#4073D1]'></FaGraduationCap>
                            <p>{data?.Heart_graduate}</p>
                        </div>
                    </div>
                </div>)
            }
            {/* div 1 */}
            {
                Neurology?.map(data => <div key={data._id} className='  '>
                    <div className='group relative'>
                        <div className='relative'>
                            <img className='w-full h-[400px] bg-cover' src={data?.Neurology_doctor_image} alt="Slide 1" />
                        </div>

                        {/* Hidden Div with Button */}
                        <div className='hidden group-hover:flex top-0 left-0 absolute items-center 
                   justify-center bg-[#FFFEFF] bg-opacity-60 w-full h-full'>
                            <Link to="/allDoctorList">
                                <button className="relative h-10 w-40 p-1 origin-top transform rounded-sm 
                    border-white bg-[#4073D1] text-white before:absolute before:top-0 
                    before:block before:h-0 before:w-full before:duration-500 hover:text-white 
                    hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full 
                    hover:before:bg-black">
                                    Get Appointment
                                </button>
                            </Link>
                        </div>

                    </div>
                    <div className='text-center bg-white text-black pt-5  pb-7'>
                       
                        <h1 className='text-xl font-bold'>{data?.Neurology_doctor_name}</h1>
                        <div className='flex items-center justify-center gap-2'>
                            <FaGraduationCap className='text-xl text-[#4073D1]'></FaGraduationCap>
                            <p>{data?.Neurology_graduate}</p>
                        </div>
                    </div>
                </div>)
            }
            {/* div 1 */}
            {
                Teeth?.map(data => <div key={data._id} className='  '>
                    <div className='group relative'>
                        <div className='relative'>
                            <img className='w-full h-[400px] bg-cover' src={data?.Teeth_doctor_image} alt="Slide 1" />
                        </div>

                        {/* Hidden Div with Button */}
                        <div className='hidden group-hover:flex top-0 left-0 absolute items-center 
                   justify-center bg-[#FFFEFF] bg-opacity-60 w-full h-full'>
                            <Link to="/allDoctorList">
                                <button className="relative h-10 w-40 p-1 origin-top transform rounded-sm 
                    border-white bg-[#4073D1] text-white before:absolute before:top-0 
                    before:block before:h-0 before:w-full before:duration-500 hover:text-white 
                    hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full 
                    hover:before:bg-black">
                                    Get Appointment
                                </button>
                            </Link>
                        </div>

                    </div>
                    <div className='text-center bg-white text-black pt-5  pb-7'>
                       
                        <h1 className='text-xl font-bold'>{data?.Teeth_doctor_name}</h1>
                        <div className='flex items-center justify-center gap-2'>
                            <FaGraduationCap className='text-xl text-[#4073D1]'></FaGraduationCap>
                            <p>{data?.Teeth_graduate}</p>
                        </div>
                    </div>
                </div>)
            }
             
            {/* div 1 */}
            {
                Orthopedagogy?.map(data => <div key={data._id} className='  '>
                    <div className='group relative'>
                        <div className='relative'>
                            <img className='w-full h-[400px] bg-cover' src={data?.Orthopedagogy_doctor_image} alt="Slide 1" />
                        </div>

                        {/* Hidden Div with Button */}
                        <div className='hidden group-hover:flex top-0 left-0 absolute items-center 
                   justify-center bg-[#FFFEFF] bg-opacity-60 w-full h-full'>
                            <Link to="/allDoctorList">
                                <button className="relative h-10 w-40 p-1 origin-top transform rounded-sm 
                    border-white bg-[#4073D1] text-white before:absolute before:top-0 
                    before:block before:h-0 before:w-full before:duration-500 hover:text-white 
                    hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full 
                    hover:before:bg-black">
                                    Get Appointment
                                </button>
                            </Link>
                        </div>

                    </div>
                    <div className='text-center bg-white text-black pt-5  pb-7'>
                       
                        <h1 className='text-xl font-bold'>{data?.Orthopedagogy_doctor_name}</h1>
                        <div className='flex items-center justify-center gap-2'>
                            <FaGraduationCap className='text-xl text-[#4073D1]'></FaGraduationCap>
                            <p>{data?.Orthopedagogy_graduate}</p>
                        </div>
                    </div>
                </div>)
            }
            

        </div>
    );
};

export default AllDoctors;