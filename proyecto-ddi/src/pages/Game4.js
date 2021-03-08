import React from 'react';
import '../styles/game.css';
import {Button, Col, Image, Row} from "antd";
import apple from "../images/apple.png";
import logo from "../images/welldonekidslogo.png";
import Routes from "../constants/Routes";
import {Link} from "react-router-dom";

const Game4 = () => {

    return(
        <div className="Game">
            <Row>
                <Col flex={2}>
                    <Image
                        src={logo}
                        width={100}
                    />
                </Col>
                <Col>
                    <h1>Hola peque, para resolver</h1>
                    <h1>esta pregunta, necesitas...</h1>
                </Col>
            </Row>
            <Row justify='center'>
                <Col justify='center'>
                    <h1>2 + 2</h1>
                </Col>
            </Row>
            <Row justify='center'>
                <Col>
                    <h1>Primero Juan tiene dos manzanas</h1>
                </Col>
            </Row>
            <Row justify='center'>
                <Col>
                    <div>
                        <Image
                            src={apple}
                            width={100}
                        />
                        <Image
                            src={apple}
                            width={100}
                        />
                    </div>
                </Col>
            </Row>
            <Row justify='center'>
                <Col>
                    <h1>Después Pepe tiene dos manzanas</h1>
                </Col>
            </Row>
            <Row justify='center'>
                <Col>
                    <div>
                        <Image
                            src={apple}
                            width={100}
                        />
                        <Image
                            src={apple}
                            width={100}
                        />

                    </div>
                </Col>
            </Row>
            <Row justify='center'>
                <Col>
                    <h1>Si Juanito y Pepe juntan sus manzanas en total tendrían 4, </h1>
                    <h1>cuenta con tus deditos para que sea más fácil.</h1>
                </Col>
            </Row>
            <Row justify='center'>
                <Col>
                    <div>
                        <Image
                            src={apple}
                            width={100}
                        />
                        <Image
                            src={apple}
                            width={100}
                        />
                        <Image
                            src={apple}
                            width={100}
                        />
                        <Image
                            src={apple}
                            width={100}
                        />
                    </div>
                </Col>
            </Row>
            <Row justify='center'>
                <Col>
                    <Link to={Routes.GAME1}>
                        <Button type="primary" >ENTENDIDO :)</Button>
                    </Link>
                </Col>
            </Row>
        </div>
    );
}
export default Game4;