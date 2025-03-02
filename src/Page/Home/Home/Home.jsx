 import Banner from "../Banner/Banner";
import EmargencyHelp from "../EmargencyHelp/EmargencyHelp";
import GeneralTreatment from "../GeneralTreatment/GeneralTreatment";
import MedicalNews from "../MedicalNews/MedicalNews";
import DefferentServices from "../OurDefferentServices/DefferentServices";
import ReasonablePrice from "../ReasonablePrice/ReasonablePrice";
import RulesMaintain from "../RulesMaintain/RulesMaintain";
import TreatmentCategory from "../TreatmentCategory/TreatmentCategory";

 
const Home = () => {
    console.log("hello");
    
    return (
        <div>
            <Banner></Banner>
            <EmargencyHelp></EmargencyHelp>
            <DefferentServices></DefferentServices>
            <RulesMaintain></RulesMaintain>
            <GeneralTreatment></GeneralTreatment>
            <TreatmentCategory></TreatmentCategory>
            <ReasonablePrice></ReasonablePrice>
            <MedicalNews></MedicalNews>
            
        </div>
    );
};

export default Home;