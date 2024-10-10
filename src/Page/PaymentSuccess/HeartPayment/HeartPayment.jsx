import { useParams } from "react-router-dom";

 
const HeartPayment = () => {
    const {tranId} = useParams();
    return (
        <div>
            <h1>payment Success {tranId}</h1>

        </div>
    );
};

export default HeartPayment;