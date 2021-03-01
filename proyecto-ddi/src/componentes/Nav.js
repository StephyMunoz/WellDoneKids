import React from 'react';
import {Menu} from 'antd';
import {Link} from "react-router-dom";
import Routes from "../constants/Routes";


const Nav = () => {
    return (

            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">
                    <Link to={Routes.HOME}>Home</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to={Routes.TRIALGAME}>Trial Game</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to={Routes.TRIALGAME}>Something else</Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to={Routes.TRIALGAME}>LANDING</Link>
                </Menu.Item>
            </Menu>

    );
}

export default Nav;