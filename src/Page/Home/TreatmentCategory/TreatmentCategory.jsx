import { useEffect, useState } from 'react';
import heartt from '../../../assets/Home/section-img.webp'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./TabsComponent.css";
import { FaBone, FaCheckCircle, FaHeartbeat, FaLocationArrow, FaTooth } from 'react-icons/fa';
import { LiaBrainSolid } from 'react-icons/lia';
import department from '../../../assets/Home/department.webp'
import { useParams } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import lottefiels from '../../../../public/Animation - 1726751382414.json'
import { FaMapLocation } from 'react-icons/fa6';


const TreatmentCategory = () => {

    const { category } = useParams()
    const categori = ['Heart', 'Neurology', 'Dentistry', 'Gastroenterology', 'Orthopedagogy']
    const initialIndex = categori.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [Alldata, setAllData] = useState();


    useEffect(() => {
        fetch('/allData.json')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, []);
    // console.log(Alldata);

    const Heart = Alldata?.slice(0, 1).filter(data => data?.category === 'heart');
    const Teeth = Alldata?.slice(0, 1).filter(data => data?.category === 'dentist');
    const Ear = Alldata?.slice(0, 1).filter(data => data?.category === 'ear');
    const Eye = Alldata?.slice(0, 1).filter(data => data?.category === 'eye');
    const Gastroenterology = Alldata?.slice(0, 1).filter(data => data?.category === 'gastroenterology');
    const Neurology = Alldata?.slice(0, 1).filter(data => data?.category === 'neurology');
    const Orthopedagogy = Alldata?.slice(0, 1).filter(data => data?.category === 'orthopedagogy');
    // console.log(Heart);

    return (
        <div className='max-w-screen-xl mx-auto '>
            <div className='text-center items-center mt-16'>
                <h1 className='lg:text-3xl font-bold md:text-2xl pb-5'>We Offer Different Services To Improve Your Health</h1>
                <img className='mx-auto pb-4' src={heartt} alt="" />
                <p className='pb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, aut?</p>
            </div>
            {/* tabSection  */}
            <div>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="custom-tab-list gap-4  ">
                        <Tab className={tabIndex === 0 ? "custom-tab custom-tab--selected" : "custom-tab"}>
                            <div className="flex justify-center text-4xl pb-4">
                                <FaHeartbeat className={tabIndex === 0 ? "text-[#4073D1]" : "text-[#868686]"} />
                            </div>
                            <div className="text-center">
                                <h3 className={tabIndex === 0 ? "font-bold text-[#868686]" : "font-bold text-[#868686]"}>
                                    Heart
                                </h3>
                            </div>
                        </Tab>
                        <Tab className={tabIndex === 1 ? "custom-tab custom-tab--selected" : "custom-tab"}>
                            <div className="flex justify-center text-4xl pb-4">
                                <LiaBrainSolid className={tabIndex === 1 ? "text-[#4073D1]" : "text-[#868686]"} />
                            </div>
                            <div className="text-center">
                                <h3 className={tabIndex === 1 ? "font-bold text-[#868686]" : "font-bold text-[#868686]"}>
                                    Neurology
                                </h3>
                            </div>
                        </Tab>
                        <Tab className={tabIndex === 2 ? "custom-tab custom-tab--selected" : "custom-tab"}>
                            <div className="flex justify-center text-4xl pb-4">
                                <FaTooth className={tabIndex === 2 ? "text-[#4073D1]" : "text-[#868686]"} />
                            </div>
                            <div className="text-center">
                                <h3 className={tabIndex === 2 ? "font-bold text-[#868686]" : "font-bold text-[#868686]"}>
                                    Dentistry
                                </h3>
                            </div>
                        </Tab>
                        <Tab className={tabIndex === 3 ? "custom-tab custom-tab--selected" : "custom-tab"}>
                            <div className="flex justify-center text-4xl pb-4">
                                <FaHeartbeat className={tabIndex === 3 ? "text-[#4073D1]" : "text-[#868686]"} />
                            </div>
                            <div className="text-center">
                                <h3 className={tabIndex === 3 ? "font-bold text-[#868686]" : "font-bold text-[#868686]"}>
                                    Gastroenterology
                                </h3>
                            </div>
                        </Tab>
                        <Tab className={tabIndex === 4 ? "custom-tab custom-tab--selected" : "custom-tab"}>
                            <div className="flex justify-center text-4xl pb-4">
                                <FaBone className={tabIndex === 4 ? "text-[#4073D1]" : "text-[#868686]"} />
                            </div>
                            <div className="text-center">
                                <h3 className={tabIndex === 4 ? "font-bold text-[#868686]" : "font-bold text-[#868686]"}>
                                    Orthopedagogy
                                </h3>
                            </div>
                        </Tab>

                    </TabList>

                    <div className=''>
                        <div className=' '>

                            <TabPanel className="tab-panel mt-10 ">
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
                                                    <button className=" mt-10 relative h-12 w-32 p-1 origin-top transform rounded-md 
                                                  border-white bg-[#4073D1] text-white before:absolute before:top-0 
                                                    before:block before:h-0 before:w-full before:duration-500 hover:text-white 
                                                     hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full 
                                                     hover:before:bg-black">
                                                        Doctor details
                                                    </button>
                                                </div>

                                            </div>


                                            {/* image section  */}
                                            <div className=' '>

                                                <img className='w-full rounded-md' src={HeartData?.Heart_doctor_image} alt="" />
                                            </div>

                                        </div>
                                    </div>)
                                }
                            </TabPanel>
                            <TabPanel>
                                <h2 className='text-xl font-bold'>Neurology</h2>
                                <p className='w-10 h-1 bg-black'></p>
                                <p className='pt-6 pb-6 text-[#4073D1]'>“Vivamus ut tellus sed tellus finibus egestas. Mauris adipiscing aliquet
                                    et nisl nec eleifend adipiscing elit.”</p>
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
                            </TabPanel>
                            <TabPanel>
                                <h2 className='text-xl font-bold'>Dentistry</h2>
                                <p className='w-10 h-1 bg-black'></p>
                                <p className='pt-6 pb-6 text-[#4073D1]'>“Vivamus ut tellus sed tellus finibus egestas. Mauris adipiscing aliquet
                                    et nisl nec eleifend adipiscing elit.”</p>
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
                            </TabPanel>
                            <TabPanel>
                                <h2 className='text-xl font-bold'>Gastroenterology</h2>
                                <p className='w-10 h-1 bg-black'></p>
                                <p className='pt-6 pb-6 text-[#4073D1]'>“Vivamus ut tellus sed tellus finibus egestas. Mauris adipiscing aliquet
                                    et nisl nec eleifend adipiscing elit.”</p>
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
                            </TabPanel>
                            <TabPanel>
                                <h2 className='text-xl font-bold'>Orthopedagogy</h2>
                                <p className='w-10 h-1 bg-black'></p>
                                <p className='pt-6 pb-6 text-[#4073D1]'>“Vivamus ut tellus sed tellus finibus egestas. Mauris adipiscing aliquet
                                    et nisl nec eleifend adipiscing elit.”</p>
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
                            </TabPanel>
                        </div>

                    </div>
                </Tabs>

            </div>
        </div>
    );
};

export default TreatmentCategory;