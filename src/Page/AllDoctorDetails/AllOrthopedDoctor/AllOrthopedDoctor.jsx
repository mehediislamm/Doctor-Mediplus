import { useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Rating from "react-rating";
import { Link } from "react-router-dom";


const AllOrthopedDoctor = () => {
    const [OrthoData, setOrthoData] = useState();
    // console.log(OrthoData);
    useEffect(() => {
        fetch('http://localhost:5000/AllData')
            .then(res => res.json())
            .then(data => setOrthoData(data))
    }, [])
    const Ortho = OrthoData?.filter(data => data?.category === 'orthopedagogy');
    return (
        <div>
            <div className=" mb-20 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    Ortho?.map(AllOrthoData =>
                        <div key={AllOrthoData._id} className='  border mt-16 p-5  bg-[#FFFFFF]'>
                            <div className='text-center items-center flex justify-center '>
                                <img className="h-[400px] bg-cover" src={AllOrthoData?.Orthopedagogy_doctor_image} alt="" />
                            </div>


                            <div>
                                <div className="flex items-center justify-between pt-5">
                                    <h1 className="text-xl font-bold">{AllOrthoData?.Orthopedagogy_doctor_name}</h1>
                                    <Rating
                                        emptySymbol={<span style={{ color: "gray", fontSize: "24px" }}>☆</span>}
                                        fullSymbol={<span style={{ color: "gold", fontSize: "24px" }}>★</span>}
                                        initialRating={AllOrthoData?.Orthopedagogy_review}
                                        readonly
                                    />
                                </div>


                                <div className="flex justify-between pt-2">

                                    <div className="flex items-center gap-2">
                                        <FaGraduationCap className="text-[#4073D1] text-xl" />
                                        <h3 className="text-xl">{AllOrthoData?.Orthopedagogy_graduate}</h3>
                                    </div>
                                </div>

                                <div className="flex justify-between pt-2 pb-5">
                                    <h1>Experience: {AllOrthoData?.Orthopedagogy_exprience}</h1>
                                    <div className="flex items-center gap-2">
                                        <FaLocationDot className="text-[#4073D1]" />
                                        {AllOrthoData?.Orthopedagogy_location}
                                    </div>
                                </div>

                                <div>
                                    <Link to={`/allOrhtoDocDetails/${AllOrthoData?.category}/${AllOrthoData?.Orthopedagogy_doctor_name}`}>
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
        </div>
    );
};

export default AllOrthopedDoctor;