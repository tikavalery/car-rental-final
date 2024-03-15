import React from "react";
import {Row, Col, Form, Input} from "antd";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {userLogin} from "../redux/actions/userActions"

//  const userLogin=(reqObj) => async dispatch=>{
//     dispatch({
//         type:"LOADING", payload:true
//     })
//     try{
//         const response = await axios.post("/api/users/login", reqObj)
//         localStorage.setItem('user', JSON.stringify(response.data))
//         message.success("Login success")
//         dispatch({type:"LOADING",payload:false})
//     } catch(error){
//         console.log(error)
//         message.error("something went wrong")
//         dispatch({type:"LOADING",payload:false})
//     }
// }

function Login(){
    const dispatch = useDispatch()
    function onFinish(values){
        dispatch(userLogin(values))
        console.log(values)
    }
    return (
       <div className="login"> 
          <Row gutter={16} className="d-flex align-items-center">
            <Col lg={16} >  
           
                <img className="login-hero-image" src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="login" />
              <h1 className="login-logo"> Tikka Rentals </h1>
            </Col>
                <Col lg={8} className="text-left">
                    <h1>Login</h1>
                    <Form layout="vertical" className="login-form p-5" onFinish={onFinish}>
                         <Form.Item name ="username" label ="username" rules ={[{require:true}]} >
                        <Input/>
                    </Form.Item>
                   
                         <Form.Item name ="password" label ="Password" rules ={[{require:true}]} >
                        <Input/>
                    </Form.Item>
                         <button className="btn1 mt-2 mb-4">Login</button>
                         <hr/>
                         <Link to ="/register">Click Her to Register</Link>
                    </Form>
                   
                </Col>
            
          </Row>
       </div>
    )
}

export default Login;