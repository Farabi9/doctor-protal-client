import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Appoinment from "./Pages/Appoinment/Appoinment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import Navbar from "./Pages/Shared/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashbord from "./Pages/Dashboard/Dashbord";
import MyAppinment from "./Pages/Dashboard/MyAppinment";
import MyReview from "./Pages/Dashboard/MyReview";
import User from "./Pages/Dashboard/Users";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";




function App() {

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/appoinment" element={<RequireAuth>
          <Appoinment></Appoinment>
        </RequireAuth>}></Route>
        <Route path="/dashboard" element={<RequireAuth>
          <Dashbord></Dashbord>
        </RequireAuth>}>
          <Route index element={<MyAppinment></MyAppinment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
         <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;
