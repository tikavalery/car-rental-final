import React from "react";

import { Button, Dropdown } from 'antd';
const user = JSON.parse(localStorage.getItem("user"))
const items = [
    {
        key: '1',
        label: (
          <a  href="https://www.luohanacademy.com">
            Home
          </a>
        ),
      },
    {
      key: '2',
      label: (
        <a  href="https://www.antgroup.com">
          Bookings
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a  href="https://www.aliyun.com">
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
                <div className="d-flex justify-content-between">
                        <h1>Tikka Company </h1>
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
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )

}

export default DefaultLayout;