import { useEffect, useState } from 'react';
import heartt from '../../../assets/Home/section-img.webp'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./TabsComponent.css";
import { FaBone,  FaHeartbeat,  FaTooth } from 'react-icons/fa';
import { LiaBrainSolid } from 'react-icons/lia';

import { useParams } from 'react-router-dom';

import HeartTabInfo from '../../TabInfo/HeartTabInfo/HeartTabInfo';
import NeurologyTabInfo from '../../TabInfo/NeurologyTabInfo/NeurologyTabInfo';
import TeethTabInfo from '../../TabInfo/TeethTabInfo/TeethTabInfo';
import Gastroenterology from '../../TabInfo/Gastroenterology/Gastroenterology';
import OrthopedagogyTabInfo from '../../TabInfo/OrthopedagogyTabInfo/OrthopedagogyTabInfo';
import { GiStomach } from 'react-icons/gi';


const TreatmentCategory = () => {

    const { category } = useParams()
    const categori = ['Heart', 'Neurology', 'Dentistry', 'Gastroenterology', 'Orthopedagogy']
    const initialIndex = categori.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [Alldata, setAllData] = useState();


    useEffect(() => {
        fetch('http://localhost:5000/AllData')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, []);
    // console.log(Alldata);

    const Heart = Alldata?.slice(0, 5).filter(data => data?.category === 'heart');
    const Neurology = Alldata?.slice(0, 6).filter(data => data?.category === 'neurology');
    const Teeth = Alldata?.slice(0, 2).filter(data => data?.category === 'dentist');
    const Gastroenterologyy = Alldata?.slice(0, 7).filter(data => data?.category === 'gastroenterology');
    const Orthopedagogy = Alldata?.slice(0, 8).filter(data => data?.category === 'orthopendagogy');
    const Ear = Alldata?.slice(0, 1).filter(data => data?.category === 'ear');
    const Eye = Alldata?.slice(0, 1).filter(data => data?.category === 'eye');
    console.log(Heart);

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
                                <GiStomach className={tabIndex === 3 ? "text-[#4073D1]" : "text-[#868686]"} />
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
                                <HeartTabInfo Heart={Heart}></HeartTabInfo>
                            </TabPanel>
                            <TabPanel>
                                <NeurologyTabInfo Neurology={Neurology}></NeurologyTabInfo>
                            </TabPanel>
                            <TabPanel>
                                <TeethTabInfo Teeth={Teeth} ></TeethTabInfo>
                            </TabPanel>
                            <TabPanel>
                                <Gastroenterology Gastroenterologyy={Gastroenterologyy}></Gastroenterology>
                            </TabPanel>
                            <TabPanel>
                                <OrthopedagogyTabInfo Orthopedagogy={Orthopedagogy}></OrthopedagogyTabInfo>
                            </TabPanel>
                        </div>

                    </div>
                </Tabs>

            </div>
        </div>
    );
};

export default TreatmentCategory;