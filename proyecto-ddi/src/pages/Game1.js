import React from 'react';
import '../styles/game.css';
import {Button, Col, Input, Row} from "antd";
import GameNav from "../components/GameNav";
import Routes from "../constants/Routes";
import {Link} from "react-router-dom";

const Game1 = () => {

    return(
        <div className="Game">
            <GameNav />
            <Row justify='center'>
                <Col justify='center'>
                    <h1>Escribe el resultado:</h1>
                </Col>
            </Row>
            <Row justify='center'>
                <Col>
                    <label name="operation"><h1>2 + 2 = </h1></label>
                    <Input name="operation"></Input>
                </Col>
            </Row>
            <Row justify='center'>
                <Col>
                    <Link to={Routes.GAME2}>
                        <Button type="primary" >LISTO :)</Button>
                    </Link>
                </Col>
            </Row>
            <Row justify='center'>
                <Col>
                    <Link to={Routes.GAME4}>
                        <Button type="primary" >Necesito ayuda :(</Button>
                    </Link>
                </Col>
            </Row>
        </div>
    );
}
export default Game1;