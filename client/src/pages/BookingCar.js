import React,{useState,useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { useParams } from 'react-router-dom';
import {getAllCars} from '../redux/actions/carsActions';
import Spinner from "../components/Spinner";
import {Col,Row,Divider,DatePicker,Checkbox,Modal} from "antd";
import moment from "moment";
import {bookCar} from "../redux/actions/bookActions";


const {RangePicker} = DatePicker;

function BookingCar(){
    const {carid }= useParams();
    const {cars} = useSelector(state => state.carsReducer);
    const {loading } = useSelector(state => state.alertsReducer);
    const [car, setCar] = useState({});
    const dispatch = useDispatch();
    const [from, setFrom] = useState("")
    const [to,setTo] = useState("");
    const [totalHours, setTotalHours] = useState(0);
    const [driver,setDriver] = useState(false);
    const [totalAmount,setTotalAmount] = useState(0);
    const [showModal, setShowModal] = useState(false);

    useEffect(() =>{
        if(cars.length ===0 ){
            dispatch(getAllCars())
        }else{
            setCar(cars.find(o => o._id ===carid))
        }
 
    },[cars, carid, dispatch])

    // useEffect(() =>{
       
    //        setTotalAmount((totalHours * car.rentPerHour) )
       
         
    // },[totalHours, car.rentPerHour, totalAmount])

    function checkPrice(){
        setTotalAmount((totalHours * car.rentPerHour) )
    }

    function checkDriver(){
        // alert("i am in check driver")
        setTotalAmount(totalAmount + (30 * totalHours))
        // if(driver){

            // setTotalAmount(totalAmount + (30 * totalHours))
           
        //   }
    }

    function checkDriverReduce(){
        setTotalAmount(totalAmount - (30* totalHours))
    }
    
   function selectTimeSlots(values){
    setFrom(values[0].$d)
    setTo(values[1].$d)
    console.log(to)
    console.log(from)
    

       const startTime = new Date(values[0].$d)
       const startTimeSeconds  = startTime.getTime();
       const endTime = new Date(values[1].$d)
       const endTimeSeconds  = endTime.getTime();
       console.log(startTimeSeconds)
       console.log(endTimeSeconds)
       const hours = Math.abs(endTimeSeconds - startTimeSeconds) / 36e5;
       setTotalHours(hours)
      


   }

   function booknow(){
    const reqObj = {
        user : JSON.parse(localStorage.getItem("user"))._id,
        car: car._id,
        totalHours,
        totalAmount,
        driverRequire: driver,
        bookedTimeSlots:{
            from,
            to,
        }
    }



    dispatch(bookCar(reqObj))
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
                         <RangePicker showTime = {{format:"HH:mm"}} format="MMM DD YYYY HH:mm" onChange={selectTimeSlots}/>
                         <br/>
                         <button className="btn1" onClick={() => {setShowModal(true)}}>See Booked Slots</button>
                         {from && to && (<button className="btn1" onClick={checkPrice}>Calculate Total Price</button>)}
                        
                         
                         <div>
                         <p>Total Hours is : <b>{totalHours}</b>  </p>
                         <p>Rent Per hour : <b>{car.rentPerHour}</b> </p>
                         <Checkbox onChange={(e) =>{
                            if(e.target.checked){
                                // setDriver(true)
                                // console.log(driver)
                                checkDriver()
                                
                            }else if(!e.target.checked){
                                checkDriverReduce()
                            }
                         }
                         }>Driver Required</Checkbox>
                         <h3>Total Amount : {totalAmount}</h3>
                         <button className="btn1" onClick={booknow}>Book Now</button>
                         </div>
                        
                    </Col>
          </Row>
          <Modal visible = {showModal} closable= {false} footer = {false} title = "Booked time slots">
                                {car && (<div className="p-2">
                                    {/* {car.bookedTimeSlots.map(slot =>{
                                        return <button className="btn1 mt-2">{slot?.from} - {slot?.to}</button>
                                    })} */}
                                </div>)}
          </Modal>
        </DefaultLayout>
    )
}

export default BookingCar;
//{match.param.carid}