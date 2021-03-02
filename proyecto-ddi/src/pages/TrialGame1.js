import React from 'react';
import '../styles/game.css';
import {Row, Col, Input} from "antd";
//import Routes from "../constants/Routes";
import GameTrialNav from "../componentes/GameTrialNav";

const TrialGame1 = () => {

    return(
        <div className="TrialGame">
            <GameTrialNav />
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
                    <button type="primary" >LISTO :)</button>
                </Col>
            </Row>
            <Row justify='center'>
                <Col>
                    <button type="primary" >Necesito ayuda :(</button>
                </Col>
            </Row>
        </div>
    );
}
export default TrialGame1;