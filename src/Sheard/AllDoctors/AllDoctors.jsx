import Doctor from '../../assets/Doctor/team1.webp'
import Doctor1 from '../../assets/Doctor/team2.webp'
import Doctor2 from '../../assets/Doctor/team3.webp'
import Doctor3 from '../../assets/Doctor/team4.webp'
const AllDoctors = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-28 pt-10'>
            {/* div 1 */}
            <div className='  '>
                <div className='group relative'>
                    <div className='relative'>
                        <img className='w-full' src={Doctor} alt="Slide 1" />
                    </div>

                    {/* Hidden Div with Button */}
                    <div className='hidden group-hover:flex top-0 left-0 absolute items-center 
                   justify-center bg-[#FFFEFF] bg-opacity-60 w-full h-full'>
                        <button className="relative h-10 w-40 p-1 origin-top transform rounded-sm 
                    border-white bg-[#4073D1] text-white before:absolute before:top-0 
                    before:block before:h-0 before:w-full before:duration-500 hover:text-white 
                    hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full 
                    hover:before:bg-black">
                            Get Appointment
                        </button>
                    </div>

                </div>
                <div className='text-center bg-white text-black pt-5  pb-7'>
                    <p className='text-[#948585]'>Neurosurgeon</p>
                    <h1 className='text-xl'>Collis Molate</h1>
                </div>
            </div>
            {/* div 1 */}
            <div className=' '>
                <div className='group relative'>
                    <div className='relative'>
                        <img className='w-full' src={Doctor1} alt="Slide 1" />
                    </div>

                    {/* Hidden Div with Button */}
                    <div className='hidden group-hover:flex top-0 left-0 absolute items-center 
                   justify-center bg-[#FFFEFF] bg-opacity-60 w-full h-full'>
                        <button className="relative h-10 w-40 p-1 origin-top transform rounded-sm 
                    border-white bg-[#4073D1] text-white before:absolute before:top-0 
                    before:block before:h-0 before:w-full before:duration-500 hover:text-white 
                    hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full 
                    hover:before:bg-black">
                            Get Appointment
                        </button>
                    </div>

                </div>
                <div className='text-center bg-white text-black pt-5  pb-7'>
                    <p className='text-[#948585]'>Neurosurgeon</p>
                    <h1 className='text-xl'>Domani Plavon</h1>
                </div>
            </div>
            {/* div 1 */}
            <div className=' '>
                <div className='group relative'>
                    <div className='relative'>
                        <img className='w-full' src={Doctor2} alt="Slide 1" />
                    </div>

                    {/* Hidden Div with Button */}
                    <div className='hidden group-hover:flex top-0 left-0 absolute items-center 
                   justify-center bg-[#FFFEFF] bg-opacity-60 w-full h-full'>
                        <button className="relative h-10 w-40 p-1 origin-top transform rounded-sm 
                    border-white bg-[#4073D1] text-white before:absolute before:top-0 
                    before:block before:h-0 before:w-full before:duration-500 hover:text-white 
                    hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full 
                    hover:before:bg-black">
                            Get Appointment
                        </button>
                    </div>

                </div>
                <div className='text-center bg-white text-black pt-5  pb-7'>
                    <p className='text-[#948585]'>Neurosurgeon</p>
                    <h1 className='text-xl'>John Mard</h1>
                </div>
            </div>
            {/* div 1 */}
            <div className='   '>
                <div className='group relative'>
                    <div className='relative'>
                        <img className='w-full' src={Doctor3} alt="Slide 1" />
                    </div>

                    {/* Hidden Div with Button */}
                    <div className='hidden group-hover:flex top-0 left-0 absolute items-center 
                   justify-center bg-[#FFFEFF] bg-opacity-60 w-full h-full'>
                        <button className="relative h-10 w-40 p-1 origin-top transform rounded-sm 
                    border-white bg-[#4073D1] text-white before:absolute before:top-0 
                    before:block before:h-0 before:w-full before:duration-500 hover:text-white 
                    hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full 
                    hover:before:bg-black">
                            Get Appointment
                        </button>
                    </div>

                </div>
                <div className='text-center bg-white text-black pt-5  pb-7'>
                    <p className='text-[#948585]'>Neurosurgeon</p>
                    <h1 className='text-xl'>Amanal Frond</h1>
                </div>
            </div>

        </div>
    );
};

export default AllDoctors;