import {useState} from "react";
// import React, { useState } from 'react';
import { AimOutlined, FileProtectOutlined, BarChartOutlined,LoginOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
    {
        key: 'sub1',
        label: 'Map',
        icon: <AimOutlined />,

    },
    {
        key: 'sub2',
        label: 'User info',
        icon: <i className={"fa-solid fa-user"} />,

    },

    {
        key: 'sub3',
        label: 'Result',
        icon: <BarChartOutlined />,

    },
    {
        key: 'sub4',
        label: 'Product list',
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