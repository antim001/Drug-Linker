import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FiUsers } from "react-icons/fi";
import { FaHospital } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { MdFactory } from "react-icons/md";
const Admin = () => {
    return (
        <div className="min-h-screen bg-base-200 ">
          
                
        <div className='flex'>
<div className='w-54   mt-52 ml-5'>

<ul className='bg-blue-200 p-4'>
<h2 className='text-2xl text-blue-400 mb-2 font-bold'> Admin Dashboard </h2>
<Link to='/admin/allpatients'><li className='mb-2 flex items-center '><FiUsers className='text-xl mr-2'></FiUsers>All Patients</li></Link>
<Link to='/admin/allhospitals'><li className='mb-2 flex items-center '><FaHospital className='text-xl mr-2'></FaHospital>All Hospitals</li></Link>
<Link to='/admin/allorders'><li className='mb-2 flex items-center '><FaList className='text-xl mr-2'></FaList>Total Orders</li></Link>
<Link to='/admin/allmanufacturer'><li className='mb-2 flex items-center '>< MdFactory className='text-xl mr-2'></ MdFactory>Total Manufacturer</li></Link>

<button className="btn btn-neutral mt-2"><Link to='/'><FaHome></FaHome>  Home</Link></button>
</ul>

</div>
<div className='flex-1'>
<Outlet></Outlet>
</div>
    </div>
            
        </div>
    );
};

export default Admin;