import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Appoinment from "./Pages/Appoinment/Appoinment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Navbar from "./Pages/Shared/Navbar";




function App() {
  
  return (
    <div className="max-w-7xl mx-auto">
       <Navbar></Navbar>
       <Routes>
         <Route path="/" element={<Home></Home>}></Route>
         <Route path="/about" element={<About></About>}></Route>
         <Route path="/appoinment" element={<Appoinment></Appoinment>}></Route>
         <Route path="/login" element={<Login></Login>}></Route>
         <Route path="/signup" element={<SignUp></SignUp>}></Route>
       </Routes>

    </div>
  );
}

export default App;
