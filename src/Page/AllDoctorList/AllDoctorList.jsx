import heart from '../../assets/Home/section-img.webp'
import AllDentistDoctor from '../AllDoctorDetails/AllDentistDoctor/AllDentistDoctor';
import AllGastroDoctor from '../AllDoctorDetails/AllGastroDoctor/AllGastroDoctor';
import AllHeartDoctor from '../AllDoctorDetails/AllHeartDoctor/AllHeartDoctor';
import AllNeuroDoctor from '../AllDoctorDetails/AllNeuroDoctor/AllNeuroDoctor';
import AllOrthopedDoctor from '../AllDoctorDetails/AllOrthopedDoctor/AllOrthopedDoctor';

const AllDoctorList = () => {
    return (
        <div>
            <div className='text-center items-center pt-20'>
                <h1 className='lg:text-3xl font-bold md:text-2xl pb-5'>We Offer Different Services To Improve Your Health</h1>
                <img className='mx-auto pb-4' src={heart} alt="" />
                <p className='pb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, aut?</p>
            </div>

            <h1 className="text-xl font-bold mb-2 text-center">Heart Doctor </h1>
            <div >
                <AllHeartDoctor></AllHeartDoctor>
            </div>
            <h1 className="text-xl font-bold mb-2 text-center">Neurology Doctor </h1>
            <div >
                <AllNeuroDoctor></AllNeuroDoctor>
            </div>
            <h1 className="text-xl font-bold mb-2 text-center">Dentist Doctor </h1>
            <div >
                <AllDentistDoctor></AllDentistDoctor>
            </div>
            <h1 className="text-xl font-bold mb-2 text-center">Gastroenterology Doctor </h1>
            <div >
               <AllGastroDoctor></AllGastroDoctor>
            </div>
            <h1 className="text-xl font-bold mb-2 text-center">Orthopedagogy Doctor </h1>
            <div >
                <AllOrthopedDoctor></AllOrthopedDoctor>
            </div>
            
        </div>
    );
};

export default AllDoctorList;