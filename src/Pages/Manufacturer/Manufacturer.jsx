import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

const Manufacturer = () => {
    return (

<div className="min-h-screen bg-base-200 ">
          
                
            <div className='flex'>
  <div className='w-54   mt-52 ml-5'>
  <h2 className='text-4xl text-blue-400'>  Manufacturer </h2>
    <div className="divider"></div>
    <button className="btn btn-outline btn-primary mb-2"><Link to='/manufacturer/manufacturerinfo'> Manufacturer Info</Link></button><br />
  <button className="btn btn-outline btn-primary mb-2"><Link to='/manufacturer/adddrug'> Add drug</Link></button><br />
 <button className="btn btn-outline btn-secondary mb-2"><Link to='/manufacturer/showdrug'> Show drug</Link></button><br />
<button className="btn btn-outline btn-accent"><Link to='/manufacturer/selldrug'> Show sell  drug</Link></button>
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

export default Manufacturer;