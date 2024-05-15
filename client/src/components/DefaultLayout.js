import React from "react";
import {Link} from "react-router-dom";

import { Button, Dropdown,Row,Col } from 'antd';
const user = JSON.parse(localStorage.getItem("user"))
const items = [
    {
        key: '1',
        label: (
          <a  href="/">
            Home
          </a>
        ),
      },
    {
      key: '2',
      label: (
        <a  href="/userbooking">
          Bookings
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a  href="/">
         Profile
        </a>
      ),
    },
    {
      key: '4',
      label: (
        <li onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "/login"
        }}>Logout</li>
      ),
    },
  ];

function DefaultLayout(props){


    return(
        <div>
            <div className="header bs1">
                 <Row gutter={16} justify="center">
                    <Col lg={20} sm= {24} xs ={24}> 
                <div className="d-flex justify-content-between">
                        <h1 ><Link to="/" style={{color:"orangered"}} >Tikka Company</Link> </h1>
                        <Dropdown
      menu={{
        items,
      }}
      placement="bottom"
      arrow
    >
      <Button>{user.username}</Button>
    </Dropdown>
                </div>
                            
                </Col>
                </Row>    
            
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )

}

export default DefaultLayout;