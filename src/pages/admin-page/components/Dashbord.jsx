import { useState } from "react";
import { AimOutlined, FileProtectOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

const Dashbord = ({ mobile }) => {
    const [current, setCurrent] = useState("sub1");

    const onClick = (e) => {
        setCurrent(e.key);
    };

    const items = [
        {
            key: "sub1",
            label: <NavLink to="/">Map</NavLink>,
            icon: <AimOutlined />,
        },
        {
            key: "sub2",
            label: <NavLink to="/user-info">Client Info</NavLink>,
            icon: <i className="fa-solid fa-user" />,
        },
        {
            key: "sub4",
            label: <NavLink to="/product-list">Product List</NavLink>,
            icon: <FileProtectOutlined />,
        },
    ];

    return (
        <div>
            {/* Mobil versiyasi uchun pastki menyu */}
            {mobile ? (
                <div className="flex justify-around py-2 my-2">
                    {items.map((item) => (
                        <NavLink
                            key={item.key}
                            to={item.label.props.to}
                            className={({ isActive }) =>
                                `flex flex-col items-center justify-center text-sm ${
                                    isActive ? "text-[#00aaff]" : "text-white"
                                }`
                            }
                        >
                            {item.icon}
                            <span>{item.label.props.children}</span>
                        </NavLink>
                    ))}
                </div>
            ) : (
                <Menu
                    theme="dark"
                    onClick={onClick}
                    style={{
                        width: "100%",
                    }}
                    defaultOpenKeys={["sub1"]}
                    selectedKeys={[current]}
                    mode="inline"
                    items={items}
                />
            )}
        </div>
    );
};

export default Dashbord;
