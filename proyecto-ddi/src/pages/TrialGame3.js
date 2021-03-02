import React from 'react';
import '../styles/game.css';
import {Row, Col, Input} from "antd";
import GameTrialNav from "../componentes/GameTrialNav";

const TrialGame3 = () => {

    return(
        <div className="TrialGame">
            <GameTrialNav />
            <Row justify='center'>
                <Col justify='center'>
                    <h1>La aventura ha</h1>
                    <h1>terminado... por ahora.</h1>
                    <h1>Si te ha gustado, regístrate</h1>
                    <h1>para seguir jugando</h1>
                </Col>
            </Row>
            <Row justify='center'>
                <Col>
                    <button type="primary" >SALIR :(</button>
                </Col>
            </Row>
            <Row justify='center'>
                <Col>
                    <button type="primary" >CREAR CUENTA :)</button>
                </Col>
            </Row>
        </div>
    );
}
export default TrialGame3;