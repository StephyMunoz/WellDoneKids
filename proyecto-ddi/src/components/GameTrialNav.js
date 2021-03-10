import React from 'react';
import {Button, Row, Col, Image} from "antd";
import logo from "../images/welldonekidslogo.png";
import Routes from "../constants/Routes";
import {Link} from "react-router-dom";

const GameTrialNav = () => {
    return(
        <>
            <Row>
                <Col flex={2}>
                    <Image
                        src={logo}
                        width={200}
                    />
                </Col>

                <Row>
                    <Col flex={3}>
                        <h1>Bienvenido a la versión de prueba</h1>
                    </Col>

                </Row>
                <Row>
                    <Col span={24}>
                        <Button >SALIR</Button>
                        <Link to={Routes.LOGIN}>
                            <Button >Crear cuenta</Button>
                        </Link>
                    </Col>
                </Row>
            </Row>
        </>
    );

}
export default GameTrialNav;