import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hook/useAuth";
import {  useNavigate } from "react-router-dom";

 
const SocialLogin = () => {
    const {googleSignIn} =useAuth();
    const navigate = useNavigate()
    
    const HandleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result =>{
            console.log(result)
            navigate('/');
        })
         
    }


    return (
        <div className="p-8">
        <div className="divider"></div>
        <div >
            <button onClick={HandleGoogleSignIn} className="btn">
                <FcGoogle className="mr-2"></FcGoogle>
                Google
            </button>
        </div>
    </div>
    );
};

export default SocialLogin;