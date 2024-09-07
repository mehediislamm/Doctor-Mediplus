import { FaAmbulance } from 'react-icons/fa';
import heart from '../../../assets/Home/section-img.webp'
import { FaBriefcaseMedical } from "react-icons/fa";
import { SiWorldhealthorganization } from 'react-icons/si';

const EmargencyHelp = () => {
    return (
        <div className='max-w-screen-xl mx-auto mt-16'>
            <div className='text-center items-center'>
                <h1 className='lg:text-3xl font-bold md:text-2xl pb-5'>We Are Always Ready to Help You & Your Family</h1>
                <img className='mx-auto pb-4' src={heart} alt="" />
                <p className='pb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, aut?</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {/* FaAmbulance */}
                <div className='mx-auto text-center items-center'>
                    <div className='mx-auto flex justify-center items-center text-4xl  text-[#4073D1] hover:text-white hover:bg-[#4073D1] mb-6 border border-slate-500  h-24
                    rounded-full w-24
                    '>
                        <FaAmbulance />
                    </div>
                    <h1 className='text-2xl font-bold mb-4'>Emergency Help</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, voluptates.</p>
                </div>

                {/* enriched  */}
                <div className='mx-auto text-center items-center'>
                    <div className='mx-auto flex justify-center items-center text-4xl  text-[#4073D1] hover:text-white hover:bg-[#4073D1] mb-6 border border-slate-500  h-24
                    rounded-full w-24
                    '>
                        <FaBriefcaseMedical />
                    </div>
                    <h1 className='text-2xl font-bold mb-4'>Enriched Pharmecy</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, voluptates.</p>
                </div>

                {/* Medical Treatment  */}

                <div className='mx-auto text-center items-center'>
                    <div className='mx-auto flex justify-center items-center text-4xl  text-[#4073D1] hover:text-white hover:bg-[#4073D1] mb-6 border border-slate-500  h-24
                    rounded-full w-24
                    '>
                        <SiWorldhealthorganization />
                    </div>
                    <h1 className='text-2xl font-bold mb-4'>Medical Treatment</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, voluptates.</p>
                </div>
            </div>
        </div>
    );
};

export default EmargencyHelp;