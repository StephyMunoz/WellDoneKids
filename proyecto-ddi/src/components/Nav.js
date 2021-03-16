import React from "react";
import { Button, Menu, Spin } from "antd";
import { useAuth } from "../lib/auth";
import { Link } from "react-router-dom";
import Routes from "../constants/Routes";
import logo from "../images/welldonekidslogo.png";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Username } from "./Username";

const Nav = () => {
  const { SubMenu } = Menu;
  const { user, logout } = useAuth();
  //const { username } = Username();

  const menuItem = [
    {
      to: Routes.INFO,
      text: "Info",
    },
  ];

  return (
    <>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ padding: "0.6em" }}
      >
        <Menu.Item key="routeHome">
          <Link to={Routes.HOME}>
            {<img src={logo} alt="Well Done Kids" style={{ width: "100px" }} />}
          </Link>
        </Menu.Item>
        {menuItem.map((item, index) => {
          return (
            <Menu.Item key={index}>
              <Link to={item.to}>{item.text} </Link>
            </Menu.Item>
          );
        })}
        {user === null ? (
          <Spin />
        ) : user === false ? (
          <>
            <Menu.Item key="loginPage">
              <Link to={Routes.LOGIN}>Ingresar</Link>
            </Menu.Item>
            <Menu.Item key="registerPage">
              <Link to={Routes.Register}>Registrarme</Link>
            </Menu.Item>
            <Menu.Item key="trialGamePage">
              <Link to={Routes.TRIALGAME}>Juega y aprende</Link>
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item key="usersProfile">
              <Link to={Routes.USERSPROFILE}>Perfil</Link>
            </Menu.Item>
            <Menu.Item key="gameRegister">
              <Link to={Routes.GAME}>Juega y aprende</Link>
            </Menu.Item>

            <UserOutlined />
            <SubMenu key="sub1" title={user.username}>
              <Menu.ItemGroup key="g1" title="Tu cuenta">
                <Menu.Item key="submenuLogout" icon={<LogoutOutlined />}>
                  <Button
                    type="link"
                    style={{ color: "#ffffff" }}
                    onClick={logout}
                  >
                    Salir
                  </Button>
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </>
        )}
      </Menu>
    </>
  );
};

export default Nav;
