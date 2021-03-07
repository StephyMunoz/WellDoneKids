import React from 'react';
import {Menu} from 'antd';
import {Link} from "react-router-dom";
import Routes from "../constants/Routes";
import logo from '../images/welldonekidslogo.png'


const Nav = () => {
    const menuItem = [
        {
            to: Routes.HOME,
            text: 'Home',
        },
        {
            to: Routes.USERSPROFILE,
            text: 'UsersProfile',
        },
        {
            to: Routes.TRIALGAME,
            text: 'TrialGame',
        },
        {
            to: Routes.TRIALGAME1,
            text: 'TrialGame1',
        },
        {
            to: Routes.TRIALGAME2,
            text: 'TrialGame2',
        },
        {
            to: Routes.TRIALGAME3,
            text: 'TrialGame3',
        },
        {
            to: Routes.TRIALGAME4,
            text: 'TrialGame4',
        },
        {
            to: Routes.INFO,
            text: 'Info',
        },
        {
            to: Routes.LOGIN,
            text: 'Login',
        },
        {
            to: Routes.GAME,
            text: 'Game',
        },
        {
            to: Routes.GAME1,
            text: 'Game1',
        },
        {
            to: Routes.GAME2,
            text: 'Game2',
        },
        {
            to: Routes.GAME3,
            text: 'Game3',
        },
        {
            to: Routes.GAME4,
            text: 'Game4',
        }
    ]
    console.log('inex',menuItem);
    return (
        <>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{padding:'0.6em'}}>
                {menuItem.map((item, index)=>{
                    return(
                        <Menu.Item key={index}>
                        <Link to={item.to}>{item.text} </Link>
                    </Menu.Item>
                    );
                })}

            </Menu>
        </>
    );
}

export default Nav;