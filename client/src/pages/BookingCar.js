import React,{useState,useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { useParams } from 'react-router-dom';
import {getAllCars} from '../redux/actions/carsActions';
import Spinner from "../components/Spinner";
import {Col,Row,Divider,DatePicker} from "antd";
import moment from "moment";

const {RangePicker} = DatePicker;

function BookingCar(){
    const {carid }= useParams();
    const {cars} = useSelector(state => state.carsReducer);
    const {loading } = useSelector(state => state.alertsReducer);
    const [car, setCar] = useState({});
    const dispatch = useDispatch();
    // const [fromDates, setFrom] = useState("vali")
    // const [toDates,setTo] = useState("sheshelololo");
    const [totalHours, setTotalHours] = useState();
    const [driver,setDriver] = useState(false);

    useEffect(() =>{
        if(cars.length ===0 ){
            dispatch(getAllCars())
        }else{
            setCar(cars.find(o => o._id ===carid))
        }
 
    },[cars])
    
   function selectTimeSlots(values){
    //    console.log(typeof moment(values[0].$d).format("DD MM YYYY hh:mm:ss", true))
    //    console.log(typeof moment(values[1].$d).format("DD MM YYYY hh:mm:ss", true))
       const startTime = new Date(values[0].$d)
       const startTimeSeconds  = startTime.getTime();
       const endTime = new Date(values[1].$d)
       const endTimeSeconds  = endTime.getTime();
       console.log(startTimeSeconds)
       console.log(endTimeSeconds)
       const hours = Math.abs(endTimeSeconds - startTimeSeconds) / 36e5;
       setTotalHours(hours)


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
                         <div>total Hours is {totalHours} </div>
                        
                    </Col>
          </Row>
        </DefaultLayout>
    )
}

export default BookingCar;
//{match.param.carid}