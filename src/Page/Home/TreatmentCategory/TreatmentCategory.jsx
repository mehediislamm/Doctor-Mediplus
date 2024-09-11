import { useState } from 'react';
import heart from '../../../assets/Home/section-img.webp'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./TabsComponent.css";
import { FaBone, FaCheckCircle, FaHeartbeat, FaTooth } from 'react-icons/fa';
import { LiaBrainSolid } from 'react-icons/lia';
import department from '../../../assets/Home/department.webp'


const TreatmentCategory = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className='max-w-screen-xl mx-auto '>
            <div className='text-center items-center mt-16'>
                <h1 className='lg:text-3xl font-bold md:text-2xl pb-5'>We Offer Different Services To Improve Your Health</h1>
                <img className='mx-auto pb-4' src={heart} alt="" />
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
                                    Cardiac Clinic
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

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <div className=' '>
                            <TabPanel className="tab-panel mt-10 ">
                                <h2 className='text-xl font-bold'>Cardiac Clinic</h2>
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

                        {/* image section  */}
                        <div className=' pt-8'>
                            <img className='w-full' src={department} alt="" />
                        </div>
                    </div>
                </Tabs>

            </div>
        </div>
    );
};

export default TreatmentCategory;