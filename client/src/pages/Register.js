import React from "react";
import {Row, Col, Form, Input} from "antd";
import {Link} from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { userRegister } from "../redux/actions/userActions";
import Spinner from "../components/Spinner";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


function Register(){
      const dispatch = useDispatch();
      const {loading } = useSelector(state => state.alertsReducer)

    function onFinish(values){
        dispatch(userRegister(values))
       
    }
        return (
            <div className="login"> 
            {loading && (<Spinner/>)}
               <Row gutter={16} className="d-flex align-items-center">
                 <Col lg={16} >  
                
                     <img data-aos = "slide-left" data-aos-duration = "1500" className="login-hero-image" src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="login" />
                   <h1 className="login-logo"> Tikka Rentals </h1>
                 </Col>
                     <Col lg={8} className="text-left">
                         <h1>Register</h1>
                         <Form layout="vertical" className="login-form p-5" onFinish={onFinish}>
                              <Form.Item name ="username" label ="username" rules ={[{require:true}]} >
                             <Input/>
                         </Form.Item>
                        
                              <Form.Item name ="password" label ="Password" rules ={[{require:true}]} >
                             <Input/>
                             
                         </Form.Item>
                         <Form.Item name ="Cpassword" label ="Confirm Password" rules ={[{require:true}]} >
                             <Input/>
                             
                         </Form.Item>
                              <button className="btn1">Register</button>
                              <hr/>
                              <Link to ="/login">Login Instead</Link>
                         </Form>
                        
                     </Col>
                 
               </Row>
            </div>
         )
    
}

export default Register;