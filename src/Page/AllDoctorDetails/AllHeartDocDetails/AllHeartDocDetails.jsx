import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import lottefiels from '../../../../public/Animation - 1726751382414.json'
import useAxiosPublic from "../../../hook/useAxiosPublic";
import useAuth from "../../../hook/useAuth";


const AllHeartDocDetails = () => {
    const [HeartData, setHeartData] = useState([]);
    const { category, Heart_doctor_name, _id } = useParams();
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    // console.log(user?.displayName);
    console.log(category);


    useEffect(() => {
        // fetch('http://localhost:5000/AllData')
        axiosPublic.get("/AllData")
            // .then(res => res.json())
            .then(res => setHeartData(res.data))
    }, [axiosPublic])

    const Heart = HeartData.filter(data => data.Heart_doctor_name === Heart_doctor_name);

    const HandelOnSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const symptoms = form.symptoms.value;
        const number = form.number.value;
        const age = form.age.value;
        const date = form.date.value;
        const appointmentDate = new Date(date);
        const hours24 = appointmentDate.getHours(); // Get hours in 24-hour format
        const minutes = appointmentDate.getMinutes().toString().padStart(2, '0'); // Get minutes

        // Convert to 12-hour format
        const hours12 = hours24 % 12 || 12; // Convert 0 (midnight) to 12
        const amPm = hours24 >= 12 ? 'PM' : 'AM'; // Determine AM/PM

        // Format the date string
        const formattedDate = `${appointmentDate.toLocaleDateString()} ${hours12}:${minutes} ${amPm}`;
        const userInfo = {
            heartId: _id,
            name, symptoms, number, age, formattedDate, Heart_doctor_name,
            price: Heart[0].Heart_price,
            experience: Heart[0].Heart_exprience,
            location: Heart[0].Heart_location,
            univercity: Heart[0].Heart_graduate,
            Username: user?.displayName || 'anonymous',
            Useremail: user?.email || 'unknow@example.com'

        }
        console.log(userInfo);

        axiosPublic.post('/heartData', userInfo)
            .then((res) => {
                 if (res.data && res.data.url) {
                    window.location.replace(res.data.url); 
                    console.log(res.data);
                } else {
                    console.error("URL not found in response");
                }
            })
            .catch((error) => {
                console.error('There was an error adding the user:', error);
            });

    }




    return (
        <div>
            {
                Heart?.map(OneDate => <div key={OneDate._id}>

                    <div className="max-w-screen-xl mx-auto">
                        <div className="   relative flex justify-center items-center w-full">
                            <img className="w-full h-[500px]" src={OneDate?.Heart_cover_image} alt="" />
                        </div>

                        <div className="  absolute top-[450px] md:left-72 lg:flex items-center   gap-5">
                            <div className="md:flex justify-center">
                                <img className="rounded-full border-4 border-t-white w-48 h-48" src={OneDate?.Heart_doctor_image} alt="" />
                            </div>
                            <div className=" md:text-center lg:mt-10">
                                <h1 className="font-bold text-xl pt-5 flex justify-center">{OneDate?.Heart_doctor_name}</h1>
                                <Rating
                                    emptySymbol={<span style={{ color: "gray", fontSize: "24px" }}>☆</span>}
                                    fullSymbol={<span style={{ color: "gold", fontSize: "24px" }}>★</span>}
                                    initialRating={OneDate?.Heart_review}
                                    readonly
                                />
                                <div className="flex gap-2 items-center">
                                    <FaGraduationCap className="text-[#4073D1] text-xl" />
                                    <h3>{OneDate?.Heart_graduate}</h3>
                                </div>

                            </div>
                        </div>
                        <div className="flex w-full flex-col md:mt-64 lg:mt-36">
                            <div className="divider"></div>
                        </div>
                        <div className="  p-5">
                            <div className='flex justify-center items-center'>
                                <Player
                                    className='md:w-32 lg:w-48 my-4'
                                    autoplay
                                    loop
                                    src={lottefiels}
                                />
                            </div>
                            <h1 className="text-xl font-bold">Intro</h1>
                            <div className='flex items-center pt-3 pb-5'>
                                <h1 className='text-4xl text-[#4073D1] font-bold'>{OneDate?.Heart_price}  </h1>
                                <p>/per Visit</p>
                            </div>
                            <p>Experienc: {OneDate?.Heart_exprience}</p>
                            <div className="flex justify-between">
                                <div>

                                    <h1 className="text-xl font-bold pt-2">Symptoms</h1>

                                    <p className="pt-3">{OneDate?.Heart_symptoms_of_disease}</p>
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
                                <p>From {OneDate?.Heart_location}</p>
                            </div>
                            <div>
                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                <button onClick={() => document.getElementById('my_modal_1').showModal()} className="mt-8 relative h-10 w-full p-1 origin-top transform rounded-sm 
                            border-white bg-[#4073D1] text-white before:absolute before:top-0 
                           before:block before:h-0 before:w-full before:duration-500 hover:text-white 
                            hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full 
                           hover:before:bg-black">
                                    Book now
                                </button>
                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box flex justify-center">

                                        <div className="modal-action">
                                            <form onSubmit={HandelOnSubmit} method="dialog">
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Name</span>
                                                    </label>
                                                    <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Symptoms of disease</span>
                                                    </label>
                                                    <input type="text" name="symptoms" placeholder="write your Symptoms" className="input input-bordered" required />

                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Contact Number</span>
                                                    </label>
                                                    <input type="number" name="number" placeholder="contact number" className="input input-bordered" required />

                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Age</span>
                                                    </label>
                                                    <input type="number" name="age" placeholder="Enter your age" className="input input-bordered" required />

                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Appointment Date & Time</span>
                                                    </label>
                                                    <input type="datetime-local" name="date" className="input input-bordered" required />

                                                </div>

                                                <div className="form-control mt-6">
                                                    <button type="submit" className="btn btn-primary">Pay</button>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AllHeartDocDetails;