import React from 'react';
import {Link } from 'react-router-dom'
const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col mt-20 ">
            <h1 className="text-5xl font-bold">Register now!</h1>

            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form  className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="tel" placeholder="Phone Number" name='number' className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text" placeholder="Address" name='address' className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Register as</span>
                        </label>
                        <select name="role" className="select select-bordered w-full">
                           
                            <option value="manufacturer">Manufacturer</option>
                           
                            <option value="hospital">Hospital</option>
                            <option value="patient">Patient</option>
                        </select>
                    </div>
                    <div className="form-control mt-6">
                      <input className='btn btn-primary' type="submit" value="Register" />
                    </div>
                    <h2>Already have an account? please <Link to='/login'><span className='text-red-500'>Log In</span></Link></h2>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Register;