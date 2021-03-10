import React from 'react';
import {Button, Col, Image, Row, Space} from "antd";
import logo from "../images/welldonekidslogo.png";
import Routes from "../constants/Routes";
import {Link} from "react-router-dom";
import {useAuth} from "../lib/auth";

const GameNav = () => {
    const { logout } = useAuth();
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
                    <Row>
                        <Col flex={3}>
                            <h1>Bienvenido UserName</h1>
                        </Col>
                    </Row>

                    <Row>
                        <Space>
                            <Col span={24}>
                                <Button onClick={logout}>Cerrar sesión</Button>
                                <Link to={Routes.USERSPROFILE}>
                                    <Button >Ver estadísticas</Button>
                                </Link>
                            </Col>
                        </Space>
                    </Row>

                </Row>


            </Row>
        </div>
    );

}
export default GameNav;