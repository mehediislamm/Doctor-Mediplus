import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const AllOrthoDocDetails = () => {
    const [OrthoData, setOrthoData] = useState([]);
    const {Orthopedagogy_doctor_name } = useParams();


    useEffect(() => {
        fetch('http://localhost:5000/AllData')
            .then(res => res.json())
            .then(data => setOrthoData(data))
    }, [])

    const Ortho = OrthoData.filter(data => data.Orthopedagogy_doctor_name === Orthopedagogy_doctor_name);
    
    return (
        <div>
            <div>
                {
                    Ortho?.map(OneDate => <div key={OneDate._id}>

                        <div className="max-w-screen-xl mx-auto">
                            <div className="   relative flex justify-center items-center w-full">
                                <img className="w-full h-[500px]" src={OneDate?.Orthopedagogy_cover_image} alt="" />
                            </div>

                            <div className="  absolute top-[450px] md:left-72 lg:flex items-center   gap-5">
                                <div className="md:flex justify-center">
                                    <img className="rounded-full border-4 border-t-white w-48 h-48" src={OneDate?.Orthopedagogy_doctor_image} alt="" />
                                </div>
                                <div className=" md:text-center lg:mt-10">
                                    <h1 className="font-bold text-xl pt-5 flex justify-center">{OneDate?.Orthopedagogy_doctor_name}</h1>
                                    <Rating
                                        emptySymbol={<span style={{ color: "gray", fontSize: "24px" }}>☆</span>}
                                        fullSymbol={<span style={{ color: "gold", fontSize: "24px" }}>★</span>}
                                        initialRating={OneDate?.Orthopedagogy_review}
                                        readonly
                                    />
                                    <div className="flex gap-2 items-center">
                                        <FaGraduationCap className="text-[#4073D1] text-xl" />
                                        <h3>{OneDate?.Orthopedagogy_graduate}</h3>
                                    </div>

                                </div>
                            </div>
                            <div className="flex w-full flex-col md:mt-64 lg:mt-36">
                                <div className="divider"></div>
                            </div>
                            <div className="  p-5">
                                <div className='flex justify-center items-center'>
                                    {/* <Player
                                        className='md:w-32 lg:w-48 my-4'
                                        autoplay
                                        loop
                                        src={lottefiels}
                                    /> */}
                                </div>
                                <h1 className="text-xl font-bold">Intro</h1>
                                <div className='flex items-center pt-3 pb-5'>
                                    <h1 className='text-4xl text-[#4073D1] font-bold'>{OneDate?.Orthopedagogy_price}  </h1>
                                    <p>/per Visit</p>
                                </div>
                                <p>Experienc: {OneDate?.Orthopedagogy_exprience}</p>
                                <div className="flex justify-between">
                                    <div>

                                        <h1 className="text-xl font-bold pt-2">Symptoms</h1>

                                        <p className="pt-3">{OneDate?.Orthopedagogy_symptoms_of_disease}</p>
                                    </div>
                                    <div>
                                        <TypeAnimation
                                            sequence={[
                                                " Experience in Cardiology", // Types 'One'
                                                1000, // Waits 1s
                                                " Specialization Cardiology ", // Deletes 'One' and types 'Two'
                                                2000, // Waits 2s
                                                "Patient Ratings and Reviews", // Types 'Three' without deleting 'Two'
                                                () => {
                                                    console.log("Sequence completed");
                                                },
                                            ]}
                                            wrapper="span"
                                            cursor={true}
                                            repeat={Infinity}
                                            // style={{ fontSize: "3rem", lineHeight:"60px", color: "#61CE70", display: "block" , }}
                                            className=" flex justify-center font-bold  text-xl text-[#4073D1] "
                                        />
                                    </div>

                                </div>


                                <div className="flex items-center gap-2 pt-3">
                                    <FaLocationDot className="text-xl text-[#4073D1]" />
                                    <p>From {OneDate?.Orthopedagogy_location}</p>
                                </div>
                                <button className="mt-8 relative h-10 w-full p-1 origin-top transform rounded-sm 
                            border-white bg-[#4073D1] text-white before:absolute before:top-0 
                           before:block before:h-0 before:w-full before:duration-500 hover:text-white 
                            hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full 
                           hover:before:bg-black">
                                    Book now
                                </button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllOrthoDocDetails;