import {useState} from "react";
// import React, { useState } from 'react';
import { AimOutlined, FileProtectOutlined,  } from '@ant-design/icons';
import { Menu } from 'antd';
import {NavLink} from "react-router";
const items = [
    {
        key: 'sub1',
        label: <NavLink to={"/"}>Map</NavLink>,
        icon: <AimOutlined />,


    },
    {
        key: 'sub2',
        label: <NavLink to={"/user-info"}>Client info</NavLink>,
        icon: <i className={"fa-solid fa-user"} />,

    },


    {
        key: 'sub4',
        label: <NavLink to={"/product-list"}>Product list</NavLink>,
        icon: <FileProtectOutlined />,

    },
];
const Dashbord = () => {
    const [theme, setTheme] = useState('dark');
    const [current, setCurrent] = useState('1');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <>

            <br />
            <br />
            <Menu
                theme={theme}
                onClick={onClick}
                style={{
                    width: 256,
                }}
                defaultOpenKeys={['sub1']}
                selectedKeys={[current]}
                mode="inline"
                items={items}
            />
        </>
    );
};
export default Dashbord;