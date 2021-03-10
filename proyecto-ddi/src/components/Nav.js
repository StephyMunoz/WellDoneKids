import React from 'react';
import {Button, Menu} from 'antd';
import { useAuth } from "../lib/auth";
import {Link} from "react-router-dom";
import Routes from "../constants/Routes";
import logo from '../images/welldonekidslogo.png'
import {LogoutOutlined} from '@ant-design/icons';


const Nav = () => {
    const { SubMenu } = Menu;
    const { user, logout } = useAuth();
    const menuItem = [
        {
            to: Routes.INFO,
            text: 'Info',
        },
        {
            to: Routes.LOGIN,
            text: 'Login',
        },
        {
            to: Routes.Register,
            text: 'Registrate',
        }
    ]
    return (
        <>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{padding:'0.6em'}}>
                <Menu.Item key="routeHome">
                    <Link to={Routes.HOME}>{<img src={logo} alt='Well Done Kids' style={{width:'100px'}} />}</Link>
                </Menu.Item>
                {menuItem.map((item, index)=>{
                    return(
                        <Menu.Item key={index}>
                        <Link to={item.to}>{item.text} </Link>
                    </Menu.Item>
                    );
                })}
                {user ? (

                    <SubMenu key="sub1" title={user.email}>
                        <Menu.ItemGroup key="g1" title="Tu cuenta">
                            <Menu.Item key="1" icon={<LogoutOutlined />}>
                                <Button type="link" style={{ color: "#ffffff" }} onClick={logout}>
                                    Salir
                                </Button>
                            </Menu.Item>,
                            <Menu.Item key="usersprofile">
                                <Link to={Routes.USERSPROFILE}>Users Profile </Link>
                            </Menu.Item>,
                            <Menu.Item key="gamesection">
                                <Link to={Routes.GAME}>Juega y aprende</Link>
                            </Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>



                ) : (
                    <Menu.Item>
                        <Link to={Routes.Register}>Registrate</Link>
                    </Menu.Item>,
                    <Menu.Item>
                        <Link to={Routes.LOGIN}>Inicia sesión</Link>
                    </Menu.Item>,
                    <Menu.Item>
                        <Link to={Routes.TRIALGAME}>Juega sin registrarte</Link>
                    </Menu.Item>
                )}
            </Menu>
        </>
    );
}

export default Nav;