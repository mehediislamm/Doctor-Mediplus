import Banner from "../Banner/Banner";
import EmargencyHelp from "../EmargencyHelp/EmargencyHelp";
import DefferentServices from "../OurDefferentServices/DefferentServices";
import RulesMaintain from "../RulesMaintain/RulesMaintain";

 
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <EmargencyHelp></EmargencyHelp>
            <DefferentServices></DefferentServices>
            <RulesMaintain></RulesMaintain>
        </div>
    );
};

export default Home;