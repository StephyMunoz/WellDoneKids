import React from "react";
import { Button, Col, Image, Row } from "antd";
import logo from "../images/welldonekidslogo.png";
import Routes from "../constants/Routes";
import { Link } from "react-router-dom";
import { useAuth } from "../lib/auth";

const GameNav = () => {
  const { user, logout } = useAuth();

  return (
    <div id="gameNav">
      <Row justify="space-around" align="middle">
        <Col span={8}>
          <Image
            id="landing_logo"
            height={190}
            width={320}
            src={logo}
            alt="No image found"
          />
        </Col>
        <Col span={8}>
          <Row>
            <Col span={10}>
              <h1 id="sub_paragraph">
                Bienvenid@ {user.username.toUpperCase()}!
              </h1>
            </Col>
          </Row>
          <Row>
            <Col span={10}>
              <Button id="gamefirst" onClick={logout}>
                Cerrar sesión
              </Button>
            </Col>
            <Col span={10}>
              <Link to={Routes.USERSPROFILE}>
                <Button id="gamefirst">Ver estadísticas</Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default GameNav;
