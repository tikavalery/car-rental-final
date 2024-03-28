import React, {useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector,useDispatch } from "react-redux";
import { getAllCars } from "../redux/actions/carsActions";
import { Button, Row, Col,DatePicker,Checkbox} from "antd";
import {Link } from "react-router-dom";
import Spinner from "../components/Spinner";

const {RangePicker} = DatePicker
function Home(){
    const {cars} = useSelector(state => state.carsReducer)
    const {loading} = useSelector(state => state.alertsReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCars())
    },[])
    return (
       <DefaultLayout>
            <Row className="mt-3" justify="center">
                    <Col lg = {20} sm = {24} className="flex justify-content-left">
                        <RangePicker/>
                    </Col>
            </Row>
                   {loading === true && (<Spinner/>)}
        <Row justify="center" gutter={16}>
            {cars.map(car=>{
                return <Col lg ={5} sm = {24} xs ={24}>
                    <div className="car p-2 bs1" >
                       <img src ={car.image} className="carimg" alt="car"/>
                       <div className="car-content d-flex align-items-center justify-content-between">
                        <div>
                            <p>{car.name}</p>
                            <p>{car.rentPerHour} Rent Per Hour </p>
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