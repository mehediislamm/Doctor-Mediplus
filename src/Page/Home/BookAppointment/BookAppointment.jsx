import heart from '../../../assets/Home/section-img.webp'

const BookAppointment = () => {
    return (
        <div>
            <div>
                <div className=' text-center items-center mt-20 pt-20 pb-10'>
                    <h1 className='lg:text-3xl font-bold md:text-2xl pb-5'>We Are Always Ready to Help You. Book An Appointment</h1>
                    <img className='mx-auto pb-4' src={heart} alt="" />
                    <p className='pb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, aut?</p>
                </div>
            </div>
        </div>
    );
};

export default BookAppointment;