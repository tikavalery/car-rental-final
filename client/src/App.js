import {Route,Routes, BrowserRouter,Navigate,Outlet} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import BookingCar from "./pages/BookingCar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserBookings from "./pages/UserBookings";
import AddCar from "./pages/AddCar";
import AdminHome from "./pages/AdminHome";
import EditCar from "./pages/EditCar";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route element = {<ProtectedRoute/>}>
                     <Route path = "/" exact element ={<Home/>}/>
                      <Route path = "/booking/:carid" exact element = {<BookingCar/>}/>
                      <Route path = "/userbooking" exaxt element = {<UserBookings/>}/>
                      <Route path = "/addcar" exact element = {<AddCar/>}/>
                      <Route path = "/admin" exact element = {<AdminHome/>}/>
                      <Route path = "/editcar/:carid" exaxt element = {<EditCar/>}/>
                   
        </Route>
     
        <Route path = "/login" exact element = {<Login/>} />
         <Route path = "/register" exact element = {<Register/>} />
        
      </Routes>
    
    
    </BrowserRouter>
    </div>
  );
}

export default App;

export function ProtectedRoute(props){
  if(localStorage.getItem("user"))
  {
    return<Outlet {...props}/>
  }else{
    return<Navigate to = "/login" />
  }
}
