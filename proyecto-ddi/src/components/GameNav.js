import React from 'react';
import {Button, Row, Col, Image} from "antd";
import logo from "../images/welldonekidslogo.png";
import Routes from "../constants/Routes";
import {Link} from "react-router-dom";

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
                        <Link to={Routes.USERSPROFILE}>
                            <Button >Ver estadísticas</Button>
                        </Link>
                    </Col>
                </Row>
            </Row>
        </div>
    );

}
export default GameNav;