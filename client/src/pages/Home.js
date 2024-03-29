import React, {useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector,useDispatch } from "react-redux";
import { getAllCars } from "../redux/actions/carsActions";
import { Button, Row, Col} from "antd";
import {Link } from "react-router-dom";
import Spinner from "../components/Spinner";

function Home(){
    const {cars} = useSelector(state => state.carsReducer)
    const {loading} = useSelector(state => state.alertsReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCars())
    },[])
    return (
       <DefaultLayout match = {cars}>
                   {loading === true && (<Spinner/>)}
        <Row justify="center" gutter={16} className="mt-5">
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