import React from "react";
import logo from "../images/welldonekidslogo.png";
import trophy_n from "../images/trophies/trophy_not_unlocked.jpg";
import trophy_u from "../images/trophies/trophy_unlocked.png";
import "../styles/game.css";
import { Button, Col, Collapse, Image, Row } from "antd";
import Routes from "../constants/Routes";
import { Link } from "react-router-dom";
import withAuth from "../hocs/withAuth";
import { Username } from "../components/Username";
import { useAuth } from "../lib/auth";
import TrophyLogic from "../components/TrophyLogic";

const { Panel } = Collapse;

const Home = () => {
  const { username } = Username();
  const { logout } = useAuth();
  return (
    <>
      <div id="background">
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
                <h1 id="sub_paragraph">Bienvenid@ {username}!</h1>
              </Col>
            </Row>
            <Row>
              <Col span={5}>
                <Button
                  id="colored_button"
                  type="primary"
                  size="large"
                  onClick={logout}
                >
                  Salir
                </Button>
              </Col>
              <Col span={5}>
                <Link to={Routes.GAME}>
                  <Button id="colored_button" type="primary" size="large">
                    Juega ahora!
                  </Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div>
        <Collapse bordered={false} defaultActiveKey={["1"]}>
          <Panel id="title" header="Estadísticas" key="1">
            <ul>
              <li>Haz realizado # de actividades esta semana</li>
              <li>Haz visto # de videos</li>
              <li>Haz cometido # de errores</li>
            </ul>
          </Panel>
          <Panel id="title" header="Notificaciones" key="2">
            <ul>
              <li>
                Padre/madre recuerda revisar tu correo para ver el reporte
                semanal de actividades
              </li>
              <li>Felicitaciones, haz obtenido un trofeo!</li>
            </ul>
          </Panel>
          <Panel id="title" header="Trofeos" key="3">
            <TrophyLogic />
          </Panel>
        </Collapse>
      </div>
    </>
  );
};
export default withAuth(Home);
