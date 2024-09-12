import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Page/Home/Home/Home";
import Doctor from "../Page/Doctor/Doctor";
import Services from "../Page/Services/Services";
import ContactUs from "../Page/ContactUs/ContactUs";

 
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