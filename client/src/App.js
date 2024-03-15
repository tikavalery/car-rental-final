import {Route,Routes, BrowserRouter} from "react-router-dom";
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
        <Route path = "/" exact element ={<Home/>}/>
        <Route path = "/login" exact element = {<Login/>} />
        <Route path = "/bookingcar" exact element = {<BookingCar/>}/>
        <Route path = "/register" exact element = {<Register/>} />
      </Routes>
    
    
    </BrowserRouter>
    </div>
  );
}

export default App;
