import React from 'react';
import {Button, Col, Image, Row, Space} from "antd";
import logo from "../images/welldonekidslogo.png";
import Routes from "../constants/Routes";
import {Link} from "react-router-dom";

const GameTrialNav = () => {
    return(
        <div className='gameNav'>
            <Row>
                <Col flex={2}>
                    <Image
                        src={logo}
                        width={200}
                    />
                </Col>

                <Row >
                    <Row>
                    <Col flex={1} span={24}>
                        <h1>Bienvenido a la versión de prueba</h1>
                    </Col>
                    </Row>


                </Row>
                <Row>
                    <Col >
                        <Space>
                            <Link to={Routes.HOME}>
                                <Button >SALIR</Button>
                            </Link>
                            <Link to={Routes.Register}>
                                <Button >Crear cuenta</Button>
                            </Link>
                        </Space>
                    </Col>
                </Row>


            </Row>
        </div>
    );

}
export default GameTrialNav;