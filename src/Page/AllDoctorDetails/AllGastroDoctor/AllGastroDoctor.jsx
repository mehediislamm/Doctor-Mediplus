import { useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Rating from "react-rating";
import { Link } from "react-router-dom";


const AllGastroDoctor = () => {
    const [GastroData, setGastroData] = useState([]);

    useEffect(() => {
        fetch('/allData.json')
            .then(res => res.json())
            .then(data => setGastroData(data))
    }, [])
    const Gastro = GastroData?.filter(data => data?.category === 'gastroenterology');
   
    return (
        <div className=" mb-20 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                Gastro?.map(AllGastroData =>
                    <div key={AllGastroData._id} className='  border mt-16 p-5  bg-[#FFFFFF]'>
                        <div className='text-center items-center flex justify-center '>
                            <img className="h-[400px] bg-cover" src={AllGastroData?.Gastroenterology_doctor_image} alt="" />
                        </div>


                        <div>
                            <div className="flex items-center justify-between pt-5">
                                <h1 className="text-xl font-bold">{AllGastroData?.Gastroenterology_doctor_name}</h1>
                                <Rating
                                    emptySymbol={<span style={{ color: "gray", fontSize: "24px" }}>☆</span>}
                                    fullSymbol={<span style={{ color: "gold", fontSize: "24px" }}>★</span>}
                                    initialRating={AllGastroData?.Gastroenterology_review}
                                    readonly
                                />
                            </div>


                            <div className="flex justify-between pt-2">

                                <div className="flex items-center gap-2">
                                    <FaGraduationCap className="text-[#4073D1] text-xl" />
                                    <h3 className="text-xl">{AllGastroData?.Gastroenterology_graduate}</h3>
                                </div>
                            </div>

                            <div className="flex justify-between pt-2 pb-5">
                                <h1>Experience: {AllGastroData?.Gastroenterology_exprience}</h1>
                                <div className="flex items-center gap-2">
                                    <FaLocationDot className="text-[#4073D1]" />
                                    {AllGastroData?.Gastro_location}
                                </div>
                            </div>

                            <div>
                                <Link to={`/allGastroDocDetails/${AllGastroData?.category}/${AllGastroData?.Gastroenterology_doctor_name}`}>
                                    <button className="relative h-10 w-full p-1 origin-top transform rounded-sm 
                            border-white bg-[#4073D1] text-white before:absolute before:top-0 
                           before:block before:h-0 before:w-full before:duration-500 hover:text-white 
                            hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full 
                           hover:before:bg-black">
                                        Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default AllGastroDoctor;