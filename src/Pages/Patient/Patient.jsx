import { FaHome } from "react-icons/fa";
import { Outlet ,Link} from 'react-router-dom';

const Patient = () => {
    return (
        <div className="min-h-screen bg-base-200 ">
          
                
            <div className='flex'>
  <div className='w-54   mt-52 ml-5'>
    <h2 className='text-4xl text-blue-400'>  Patient </h2>
    <div className="divider"></div>
  <button className="btn btn-outline btn-primary mb-2"><Link to='/patient/patientinfo'> Patient Info</Link></button><br />
 <button className="btn btn-outline btn-secondary mb-2"><Link to='/patient/patientcart'> Cart</Link></button><br />

<br />
<button className="btn btn-neutral mt-2"><Link to='/'><FaHome></FaHome>  Home</Link></button>
   </div>
  <div className='flex-1'>
    <Outlet></Outlet>
  </div>
        </div>
                
            </div>
    );
};

export default Patient;