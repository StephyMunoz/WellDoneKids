import React from 'react';
import '../styles/game.css';
import {Button, Row, Col, Input} from "antd";
import GameNav from "../componentes/GameNav";

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
                    <Button type="primary" >LISTO :)</Button>
                </Col>
            </Row>
            <Row justify='center'>
                <Col>
                    <Button type="primary" >Necesito ayuda :(</Button>
                </Col>
            </Row>
        </div>
    );
}
export default Game1;