import React,{useState,useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { useParams } from 'react-router-dom';
import {getAllCars} from '../redux/actions/carsActions';
import Spinner from "../components/Spinner";
import {Col,Row,Divider,DatePicker} from "antd";

const {RangePicker} = DatePicker;

function BookingCar(){
    const {carid }= useParams();
    const {cars} = useSelector(state => state.carsReducer);
    const {loading } = useSelector(state => state.alertsReducer);
    const [car, setCar] = useState({})
    const dispatch = useDispatch()
    // console.log(car)
    useEffect(() =>{
        if(cars.length ===0 ){
            dispatch(getAllCars())
        }else{
            setCar(cars.find(o => o._id ===carid))
        }
 
    },[cars])
    
   function selectTimeSlots(values){
 console.log(values)
   }
    return(
        <DefaultLayout>
          {loading && (<Spinner/>)}
          <Row justify="center" className="d-flex align-items-center" style={{minHeight:"90vh"}}>
                    <Col lg ={10} sm ={24} xs ={24}>
                         <img src={car.image} className="carimg2 bs1" alt="car"/>
                          
                    </Col>
                    <Col lg ={10} sm ={24} xs ={24}>
                         <Divider type ="horizontal" dashed className="divider-style"> Car Info </Divider>
                         <div style={{textAlign: "right"}}>
                            <p>{car.name}</p>
                            <p>{car.rentPerHour}</p>
                            <p>Feul: {car.feulType}</p>
                            <p>Max Persons : {car.capacity}</p>
                         </div>
                         <Divider type ="horizontal" className="divider-style"> Selected time slots </Divider>
                         <RangePicker showTime = {{format:"HH:mm"}} format="MMM DDD YYYY HH:mm" onChange={selectTimeSlots}/>
                    </Col>
          </Row>
        </DefaultLayout>
    )
}

export default BookingCar;
//{match.param.carid}