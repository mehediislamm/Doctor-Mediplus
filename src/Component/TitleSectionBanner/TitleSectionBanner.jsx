
const TitleSectionBanner = ({subHeading, heading}) => {
    return (
        <div className="  my-8  ">
            <h3 className="text-3xl uppercase font-bold py-2">{heading}</h3>
            <p className="text-black">---{subHeading}---</p>
        </div>
    )
};

export default TitleSectionBanner;