import React, {useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector,useDispatch } from "react-redux";
import { getAllCars } from "../redux/actions/carsActions";
import { Button, Row, Col,DatePicker,Checkbox} from "antd";
import {Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import moment from "moment";

const {RangePicker} = DatePicker
function Home(){
    const {cars} = useSelector(state => state.carsReducer)
    const {loading} = useSelector(state => state.alertsReducer)
    const [totalCars,setTotalCars] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCars())
    },[])

     useEffect(() =>{
        setTotalCars(cars)
     },[cars])

    function setFilter(values){

        let carsToDisplay = []
        let selectedFrom  = moment(values[0].$d,"MMM DD YYYY HH:mm")
        let selectedTo = moment(values[1].$d,"MMM DD YYYY HH:mm")



                for (let car of cars ){
                    if(car.bookedTimeSlots.length === 0 ){
                                carsToDisplay.push(car)
                                } else{
                                     let checkNotAvialability =[]
                                        let checkAvialability = []
                                    for (let booking of car.bookedTimeSlots){
                                       
                                        if(selectedFrom.isBetween(moment(booking.from),moment(booking.to)) || selectedTo.isBetween(moment(booking.from),moment(booking.to)) || 
                  moment(booking.from).isBetween(selectedFrom,selectedTo)|| moment(booking.to).isBetween(selectedFrom,selectedTo))
                        {
                            checkNotAvialability.push("No") 
                        } else{
                            checkAvialability.push("yes")    
                        }
                                    }
                        if(checkAvialability.length === car.bookedTimeSlots.length){
                    
                                  carsToDisplay.push(car)
                        }
                              
                }}
        

     setTotalCars(carsToDisplay)
    //  console.log(totalCars)
    }
    return (
       <DefaultLayout>
            <Row className="mt-3" justify="center">
                    <Col lg = {20} sm = {24} className="d-flex justify-content-left">
                        <RangePicker onChange={setFilter} showTime = {{format:"HH:mm"}} format="MMM DD YYYY HH:mm" />
                    </Col>
            </Row>
                   {loading === true && (<Spinner/>)}
        <Row justify="center" gutter={16}>
            {totalCars.map(car=>{
                return <Col lg ={5} sm = {24} xs ={24}>
                    <div className="car p-2 bs1" >
                       <img src ={car.image} className="carimg" alt="car"/>
                       <div className="car-content d-flex align-items-center justify-content-between">
                        <div>
                            <p>{car.name}</p>
                            <p> Rent Per Hour : {car.rentPerHour} </p>
                        </div>
                        <div>
                            <button className="btn1 mr-2"> <Link to = {`/booking/${car._id}`}>Book Now</Link></button>
                        </div>
                       </div>
                    </div>
                </Col>
            })}
        </Row>
       </DefaultLayout>
       
    )
}

export default Home;