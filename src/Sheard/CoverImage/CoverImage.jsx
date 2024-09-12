/* eslint-disable react/prop-types */
import bgImage from '../../assets/Home/fun-bg.b5af0dac.jpg'

const CoverImage = ({heading, subHeading}) => {
    return (
        <div className=' '>
            <div className='  h-64 bg-cover bg-center' style={{
                backgroundImage: `url(${bgImage})`,
            }}>
                <div className='h-64 bg-[#4073D1] bg-opacity-60'>
                     <h1 className='pt-24 text-4xl font-bold pb-3 text-center items-center text-white'>{heading}</h1>
                     <p className='font-bold text-center items-center text-white'>{subHeading}</p>
                </div>
            </div>
        </div>
    );
};

export default CoverImage;