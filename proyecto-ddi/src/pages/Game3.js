import React from "react";
import "../styles/game.css";
import { Button, Col, Row } from "antd";
import GameNav from "../components/GameNav";
import Routes from "../constants/Routes";
import { Link, Router } from "react-router-dom";
import withAuth from "../hocs/withAuth";

const Game3 = () => {
  return (
    <div className="Game">
      <GameNav />
      <Row justify="center">
        <Col justify="center">
          <h1>Mucha mas diversion espera por ti!</h1>
          <h1>Quieres seguir jugando?</h1>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={4} offset={3}>
          <Link to={Routes.HOME}>
            <Button type="primary">No :(</Button>
          </Link>
        </Col>
        <Col span={4}>
          <Link to={Routes.GAME}>
            <Button type="primary">Si :)</Button>
          </Link>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Link to={Routes.USERSPROFILE}>
            <Button type="primary">Ir a mi perfil</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
export default withAuth(Game3);
