import React from 'react';
import '../styles/game.css';
import {Button, Col, Row} from "antd";
import GameNav from "../components/GameNav";
import Routes from "../constants/Routes";
import {Link} from "react-router-dom";

const Game3 = () => {

    return(
        <div className="Game">
            <GameNav />
            <Row justify='center'>
                <Col justify='center'>
                    <h1>La aventura ha</h1>
                    <h1>terminado... por ahora.</h1>

                </Col>
            </Row>
            <Row justify='center'>
                <Col>
                    <Button type="primary" >SALIR :(</Button>
                </Col>
            </Row>
            <Row justify='center'>
                <Col>
                    <Link to={Routes.USERSPROFILE}>
                        <Button type="primary" >VER LOGROS :)</Button>
                    </Link>
                </Col>
            </Row>
        </div>
    );
}
export default Game3;