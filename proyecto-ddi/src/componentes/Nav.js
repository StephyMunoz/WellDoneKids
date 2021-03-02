import React from 'react';
import {Menu} from 'antd';
import {Link} from "react-router-dom";
import Routes from "../constants/Routes";
import logo from '../images/welldonekidslogo.png'


const Nav = () => {
    return (

            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{padding:'0.6em'}}>
                
                <Menu.Item key="0">
                    <Link to={Routes.HOME}>{<img src={logo} alt='Well Done Kids' style={{width:'100px'}} />}</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to={Routes.TRIALGAME}>Trial Game</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to={Routes.TRIALGAME1}>TrialGame1</Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to={Routes.TRIALGAME2}>TrialGame2</Link>
                </Menu.Item>
                <Menu.Item key="5">
                    <Link to={Routes.TRIALGAME3}>TrialGame3</Link>
                </Menu.Item>
                <Menu.Item key="6">
                    <Link to={Routes.TRIALGAME4}>TrialGame4</Link>
                </Menu.Item>
                <Menu.Item key="7">
                    <Link to={Routes.LANDING}>LANDING</Link>
                </Menu.Item>
                
            </Menu>

    );
}

export default Nav;