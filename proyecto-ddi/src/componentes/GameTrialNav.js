import React from 'react';
import {Row, Col, Image} from "antd";
import logo from "../images/welldonekidslogo.png";

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
                        <button >SALIR</button>
                        <button >Crear cuenta</button>
                    </Col>
                </Row>
            </Row>
        </>
    );

}
export default GameTrialNav;