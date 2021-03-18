import React from "react";
import { Button, Col, Image, Row } from "antd";
import logo from "../images/welldonekidslogo.png";
import Routes from "../constants/Routes";
import { Link } from "react-router-dom";

const GameTrialNav = () => {
  return (
    <div className="gameNav">
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
            <Col span={16}>
              <h1>Bienvenido a la versión de prueba</h1>
            </Col>
          </Row>
          <Row>
            <Col span={10}>
              <Link to={Routes.HOME}>
                <Button>SALIR</Button>
              </Link>
            </Col>
            <Col span={10}>
              <Link to={Routes.Register}>
                <Button>Crear cuenta</Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default GameTrialNav;
