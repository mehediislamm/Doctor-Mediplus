import AllDoctors from "../../Sheard/AllDoctors/AllDoctors";
import CoverImage from "../../Sheard/CoverImage/CoverImage";


const Doctor = () => {
    return (
        <div>
            <CoverImage heading="Meet Our Qualified Doctors"
                subHeading="Home>Doctors"
            ></CoverImage>
            <div className="pt-20 max-w-screen-xl mx-auto">
                <AllDoctors></AllDoctors>
            </div>
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

export default Doctor;