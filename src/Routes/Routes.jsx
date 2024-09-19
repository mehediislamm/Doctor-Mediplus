import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Page/Home/Home/Home";
import Doctor from "../Page/Doctor/Doctor";
import Services from "../Page/Services/Services";
import ContactUs from "../Page/ContactUs/ContactUs";
import TreatmentCategory from "../Page/Home/TreatmentCategory/TreatmentCategory";

 
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
      ]
    },
  ]);