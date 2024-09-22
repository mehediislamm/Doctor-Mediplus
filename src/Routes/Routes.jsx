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
            path:"contact",
            element:<ContactUs></ContactUs>
        },
        {
            path:"allHeartDoctor",
            element:<AllHeartDoctor></AllHeartDoctor>
        },
        {
            path:"allHeartDocDetails/:category/:Heart_doctor_name",
            element:<AllHeartDocDetails></AllHeartDocDetails>
        },
        {
            path:"allNuroDoctor",
            element:<AllNeuroDoctor></AllNeuroDoctor>
        },
        {
            path:"allNuroDocDetails/:Neurology_doctor_name",
            element:<AllNeuroDocDetails></AllNeuroDocDetails>
        },
        {
            path:"allDentistDoctor",
            element:<AllDentistDoctor></AllDentistDoctor>
        },
        {
            path:"allDentistDocDetails/:Teeth_doctor_name",
            element:<AllDentistDocDetails></AllDentistDocDetails>
        },
        {
            path:"allGastroDoctor",
            element:<AllGastroDoctor></AllGastroDoctor>
        },
        {
            path:"allGastroDocDetails/:Gastroenterology_doctor_name",
            element:<AllDentistDocDetails></AllDentistDocDetails>
        },
        {
            path:"allOrthopedDoctor",
            element:<AllOrthopedDoctor></AllOrthopedDoctor>
        },
        {
            path:"allOrhtoDocDetails/:Orthopedagogy_doctor_name",
            element:<AllDentistDocDetails></AllDentistDocDetails>
        },
      ]
    },
  ]);