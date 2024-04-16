import { createBrowserRouter, } from "react-router-dom";
import Main from './../Layout/Main';
import Home from './../Pages/Home/Home/Home';
import Drug from './../Pages/Drug/Drug';
import Login from './../Pages/Login/Login';
import Register from './../Pages/Register/Register';
import Manufacturer from './../Pages/Manufacturer/Manufacturer';
import Distributor from './../Pages/Distributor/Distributor';
import Hospital from './../Pages/Hospital/Hospital';
import Patient from './../Pages/Patient/Patient';




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
            path:'/drugs',
            element:<Drug></Drug>
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

  ]);
  export default router