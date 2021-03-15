import React from "react";
import { Col, Collapse, Image, Row } from "antd";
import trophy_n from "../images/trophies/trophy_not_unlocked.jpg";
import trophy_u from "../images/trophies/trophy_unlocked.png";

const { Panel } = Collapse;

const TrophyLogic = (score) => {
  if (score == 1) {
  }
  return (
    <>
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
              Padre/madre recuerda revisar tu correo para ver el reporte semanal
              de actividades
            </li>
            <li>Felicitaciones, haz obtenido un trofeo!</li>
          </ul>
        </Panel>
        <Panel id="title" header="Trofeos" key="3">
          <div id="trophy">
            <Row align="middle">
              <Col span={6}>
                <Image
                  height={100}
                  width={100}
                  src={trophy_n}
                  alt="No image found"
                />
              </Col>
              <Col span={16}>
                <h3>Buen trabajo! (no desbloqueado)</h3>
                <h4>Obten tu primer video de recompensa</h4>
              </Col>
            </Row>
          </div>
          <div id="trophy">
            <Row align="middle">
              <Col span={6}>
                <Image
                  height={100}
                  width={100}
                  src={trophy_u}
                  alt="No image found"
                />
              </Col>
              <Col span={16}>
                <h3>La aventura comienza! (desbloqueado)</h3>
                <h4>Realiza tu primera actividad</h4>
              </Col>
            </Row>
          </div>
        </Panel>
      </Collapse>
    </>
  );
};
export default TrophyLogic;
