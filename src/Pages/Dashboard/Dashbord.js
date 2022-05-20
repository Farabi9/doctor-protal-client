import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import{useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'



const Dashbord = () => {
const [user] =useAuthState(auth);
const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
      <h2 className='text-3xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
     <Outlet></Outlet>
    
  
  </div> 
  <div class="drawer-side">
    <label htmlFor="dashboard-sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li className='font-mono font-bold bg-primary rounded-md'><Link to='/dashboard'>My Appoinments</Link></li>
      <li  className='font-mono font-bold bg-primary rounded-md mt-5'><Link to='/dashboard/review'>My Reviews</Link></li>
      {admin && <>
        <li  className='font-mono font-bold bg-primary rounded-md mt-5'>
        <Link to='/dashboard/users'>All Users</Link></li>
        <li  className='font-mono font-bold bg-primary rounded-md mt-5'>
        <Link to='/dashboard/addDoctor'>Add a Doctor</Link></li>
      </>}
    </ul>
  
  </div>
</div>
    );
};

export default Dashbord;