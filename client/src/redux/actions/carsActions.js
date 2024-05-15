import axios from "axios";
import { message } from "antd";

export const getAllCars =()=> async dispatch =>{
    dispatch({type:"LOADING", payload:true})
    try {
        const response= await axios.get("/api/cars/getallcars");
        // console.log(response)
        dispatch({type:"GET_ALL_CARS",payload:response.data})
        dispatch({type:"LOADING",payload:false})
    } catch(error){
             console.log(error)
             dispatch({type:"LOADING",payload:false})
    }
}

export const addCar = (reqObj) =>async dispatch =>{
    dispatch({type:"LOADING", payload:true})
    try{
        await axios.post("/api/cars/addcar",reqObj)
        dispatch({type:"LOADING", payload:false})
        message.success("New Car Added Succesfully")
        setTimeout(() => {
            window.location.href = "/"
        },500)
    }catch(error){
        console.log(error)
        dispatch({type:"LOADING", payload:false})
    }
}