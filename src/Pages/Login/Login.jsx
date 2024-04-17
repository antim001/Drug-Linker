
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogIn=(event)=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const role=form.role.value;
        console.log(email,password,role);
    }
    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col mt-20 ">
                <h1 className="text-5xl font-bold">Login now!</h1>

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Login as</span>
                            </label>
                            <select name="role" className="select select-bordered w-full">
                              
                                <option value="manufacturer">Manufacturer</option>
                                
                                <option value="hospital">Hospital</option>
                                <option value="patient">Patient</option>
                            </select>
                        </div>
                        <div className="form-control mt-6">
                          <input className='btn btn-primary' type="submit" value="Log In" />
                        </div>
                        <h2>New here? please <Link to='/register'><span className='text-red-500'>Register</span></Link></h2>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
