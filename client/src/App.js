import {Route,Routes, BrowserRouter,Navigate,Outlet} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import BookingCar from "./pages/BookingCar";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route element = {<ProtectedRoute/>}>
                     <Route path = "/" exact element ={<Home/>}/>
                      <Route path = "/booking/:carid" exact element = {<BookingCar/>}/>
                   
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
