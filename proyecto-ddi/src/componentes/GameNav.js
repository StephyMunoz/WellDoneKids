import React from 'react';
import {Button, Row, Col, Image} from "antd";
import logo from "../images/welldonekidslogo.png";

const GameNav = () => {
    return(
        <div >
            <Row>
                <Col flex={2}>
                    <Image
                        src={logo}
                        width={200}
                    />
                </Col>

                <Row>
                    <Col flex={3}>
                        <h1>Bienvenido UserName</h1>
                    </Col>

                </Row>
                <Row>
                    <Col span={24}>
                        <Button >Cerrar sesión</Button>
                        <Button >Ver estadísticas</Button>
                    </Col>
                </Row>
            </Row>
        </div>
    );

}
export default GameNav;