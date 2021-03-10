import React from 'react';
import logo from "../images/welldonekidslogo.png";
import trophy_n from "../images/trophy_not_unlocked.jpg";
import trophy_u from "../images/trophy_unlocked.png"
import '../styles/game.css';
import {Button, Col, Collapse, Image, Row} from 'antd';
import Routes from "../constants/Routes";
import {Link} from "react-router-dom";
import withAuth from "../hocs/withAuth";

const { Panel } = Collapse;

const Home = () => {

    return(
        <>
            <div id="background">
                <Row justify="space-around" align="middle">
                    <Col span={8}>
                        <Image id="landing_logo" height={190} width={320} src={logo} alt="No image found"/>
                    </Col>
                    <Col span={8}> 
                        <Row>
                            <Col span={10}>
                                <h1 id="sub_paragraph">Bienvenido Username!</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={5}>
                                <Button id="colored_button" type="primary" size="large">Salir</Button>
                            </Col>
                            <Col span={5}>
                                <Link to={Routes.GAME}>
                                    <Button id="colored_button" type="primary" size="large">Juega ahora!</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <div>
                <Collapse bordered={false} defaultActiveKey={['1']}>
                    <Panel id="title" header="Estadísticas" key="1">
                        <ul>
                            <li>Haz realizado # de actividades esta semana</li>
                            <li>Haz visto # de videos</li>
                            <li>Haz cometido # de errores</li>
                        </ul>
                    </Panel>
                    <Panel id="title" header="Notificaciones" key="2">
                        <ul>
                            <li>Padre/madre recuerda revisar tu correo para ver el reporte semanal de actividades</li>
                            <li>Felicitaciones, haz obtenido un trofeo!</li>
                        </ul>
                    </Panel>
                    <Panel id="title" header="Trofeos" key="3">
                        <div id="trophy">
                            <Row align="middle">
                                <Col span={6}>
                                    <Image height={100} width={100} src={trophy_n} alt="No image found"/>
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
                                    <Image height={100} width={100} src={trophy_u} alt="No image found"/>
                                </Col>
                                <Col span={16}>
                                    <h3>La aventura comienza! (desbloqueado)</h3>
                                    <h4>Realiza tu primera actividad</h4>
                                </Col>
                            </Row>
                        </div>
                    </Panel>
                </Collapse>
            </div>
        </>
    );
}
export default withAuth(Home);