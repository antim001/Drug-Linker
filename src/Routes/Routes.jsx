import { createBrowserRouter, } from "react-router-dom";
import Main from './../Layout/Main';
import Home from './../Pages/Home/Home/Home';
import Login from './../Pages/Login/Login';
import Register from './../Pages/Register/Register';
import Manufacturer from './../Pages/Manufacturer/Manufacturer';
import Distributor from './../Pages/Distributor/Distributor';
import Hospital from './../Pages/Hospital/Hospital';
import Patient from './../Pages/Patient/Patient';
import Admin from './../Pages/Admin/Admin';

import AddDrug from './../Pages/Manufacturer/AddDrug';
import ShowDrug from './../Pages/Manufacturer/ShowDrug';
import SellDrug from './../Pages/Manufacturer/SellDrug';
import HospitalInfo from './../Pages/Hospital/HospitalInfo';
import HospitalCart from './../Pages/Hospital/HospitalCart';
import ManufacturerInfo from './../Pages/Manufacturer/ManufacturerInfo';




const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
         {
            path: '/',
            element:<Home></Home>
         },
         {
            path:'/admin',
            element:<Admin></Admin>
         },
         {
            path:'/login',
            element:<Login></Login>
         },
         {
            path:'/register',
            element:<Register></Register>
         },
         {
            path:'/manufacturer',
            element:<Manufacturer></Manufacturer>
         },
         {
            path:'/distributor',
            element:<Distributor></Distributor>
         },
         {
            path:'/hospital',
            element:<Hospital></Hospital>
         },
         {
            path:'/patient',
            element:<Patient></Patient>
         }


      ]
    },
    {
      path:'/manufacturer',
      element:<Manufacturer></Manufacturer>,
      children:[
         {
            path:'adddrug',
            element:<AddDrug></AddDrug>
         },
         {
            path:'showdrug',
            element:<ShowDrug></ShowDrug>
         },
         {
            path:'selldrug',
            element:<SellDrug></SellDrug>
         },
         {
            path:'manufacturerinfo',
            element:<ManufacturerInfo></ManufacturerInfo>
         }
      ]
    },
    {
      path:'/hospital',
      element:<Hospital></Hospital>,
      children:[
       {
         path:'hospitalinfo',
         element:<HospitalInfo></HospitalInfo>
       },
       {
         path:'hospitalcart',
         element:<HospitalCart></HospitalCart>
       }

      ]
    }

  ]);
  export default router