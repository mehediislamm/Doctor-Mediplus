import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Page/Home/Home/Home";
import Doctor from "../Page/Doctor/Doctor";
import Services from "../Page/Services/Services";
import ContactUs from "../Page/ContactUs/ContactUs";
import TreatmentCategory from "../Page/Home/TreatmentCategory/TreatmentCategory";
import AllHeartDoctor from "../Page/AllDoctorDetails/AllHeartDoctor/AllHeartDoctor";
import AllHeartDocDetails from "../Page/AllDoctorDetails/AllHeartDocDetails/AllHeartDocDetails";
import AllNeuroDoctor from "../Page/AllDoctorDetails/AllNeuroDoctor/AllNeuroDoctor";
import AllNeuroDocDetails from "../Page/AllDoctorDetails/AllNeuroDoctor/AllNeuroDocDetails/AllNeuroDocDetails";
import AllDentistDoctor from "../Page/AllDoctorDetails/AllDentistDoctor/AllDentistDoctor";
import AllDentistDocDetails from "../Page/AllDoctorDetails/AllDentistDoctor/AllDentistDocDetails/AllDentistDocDetails";
import AllGastroDoctor from "../Page/AllDoctorDetails/AllGastroDoctor/AllGastroDoctor";
import AllOrthopedDoctor from "../Page/AllDoctorDetails/AllOrthopedDoctor/AllOrthopedDoctor";
import AllGastroDocDetails from "../Page/AllDoctorDetails/AllGastroDoctor/AllGastroDocDetails/AllGastroDocDetails";
import AllOrthoDocDetails from "../Page/AllDoctorDetails/AllOrthopedDoctor/AllOrthoDocDetails/AllOrthoDocDetails";
import AllDoctorList from "../Page/AllDoctorList/AllDoctorList";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import Dashboard from "../LayOut/Dashboard";
import MyProfile from "../Page/Dashboard/MyProfile/MyProfile";
import HeartPayment from "../Page/PaymentSuccess/HeartPayment/HeartPayment";
import HeartPaymentFaill from "../Page/PaymentFaill/HeartPaymentFaill/HeartPaymentFaill";

 
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"doctor",
            element:<Doctor></Doctor>
        },
        {
            path:"treatmentcategory/:category",
            element:<TreatmentCategory></TreatmentCategory>
        },
        {
            path:"services",
            element:<Services></Services>
        },
        {
            path:"payment/success/:tranId",
            element:<HeartPayment></HeartPayment>
        },
        {
            path:"payment/fail/:tranId",
            element:<HeartPaymentFaill></HeartPaymentFaill>
        },
        {
            path:"contact",
            element:<ContactUs></ContactUs>
        },
        {
            path:"allHeartDoctor",
            element:<AllHeartDoctor></AllHeartDoctor>
        },
        {
            path:"allHeartDocDetails/:_id/:category/:Heart_doctor_name",
            element:<AllHeartDocDetails></AllHeartDocDetails>
        },
        {
            path:"allNuroDoctor",
            element:<AllNeuroDoctor></AllNeuroDoctor>
        },
        {
            path:"allNuroDocDetails/:_id/:Neurology_doctor_name",
            element:<AllNeuroDocDetails></AllNeuroDocDetails>
        },
        {
            path:"allDentistDoctor",
            element:<AllDentistDoctor></AllDentistDoctor>
        },
        {
            path:"allDentistDocDetails/:_id/:category/:Teeth_doctor_name",
            element:<AllDentistDocDetails></AllDentistDocDetails>
        },
        {
            path:"allGastroDoctor",
            element:<AllGastroDoctor></AllGastroDoctor>
        },
        {
            path:"allGastroDocDetails/:_id/:category/:Gastroenterology_doctor_name ",
            element:<AllGastroDocDetails></AllGastroDocDetails>
        },
        {
            path:"allOrthopedDoctor",
            element:<AllOrthopedDoctor></AllOrthopedDoctor>
        },
        {
            path:"allOrhtoDocDetails/:_id/:category/:Orthopedagogy_doctor_name",
            element: <AllOrthoDocDetails></AllOrthoDocDetails>
        },
        {
            path:"allDoctorList",
            element:<AllDoctorList></AllDoctorList>
        },
        {
            path:"login",
            element:<Login></Login>
        },
        {
            path:"signUp",
            element:<SignUp></SignUp>
        },
      ]
    },
    // dashboard section  
    {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        children:[
          {
            path:'myProfile',
            element:<MyProfile></MyProfile>
          },
        ]
    }
  ]);