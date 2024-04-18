import {useContext} from 'react';
import {Link } from 'react-router-dom'
import { AuthContext } from './../../Provider/AuthProvider';
import { toast } from 'react-hot-toast';
const Register = () => {
    const {createUser}=useContext(AuthContext);
 const handleRegister=(event)=>{
      event.preventDefault();
      const form=event.target;
      const email=form.email.value;
      const password=form.password.value;

      //validation
      if(password.length<6){
        toast.error("password must be 6 characters")
        return;
      }
      createUser(email,password)
      .then(res => {
        // Display success message using toast.success()
        toast.success('registration  successful!');
        console.log(res);
    })
      .catch(error => {
        // Display Firebase error message using toast.error()
        if (error.code === 'auth/email-already-in-use') {
          toast.error('Email is already in use');
        } else {
          toast.error(error.message);
        }
        console.log(error);  // Optionally log the error
      });
  
 }
    return (
        <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col mt-20 ">
            <h1 className="text-5xl font-bold">Register now!</h1>

            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleRegister}  className="card-body">
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