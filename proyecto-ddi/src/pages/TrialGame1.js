import React from 'react';
import '../styles/game.css';
import {Button, Row, Col, Input} from "antd";
import GameTrialNav from "../components/GameTrialNav";
import Routes from "../constants/Routes";
import {Link} from "react-router-dom";

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
                    <Link to={Routes.TRIALGAME2}>
                        <Button type="primary" >LISTO :)</Button>
                    </Link>
                </Col>
            </Row>
            <Row justify='center'>
                <Col>
                    <Link to={Routes.TRIALGAME4}>
                        <Button type="primary" >Necesito ayuda :(</Button>
                    </Link>
                </Col>
            </Row>
        </div>
    );
}
export default TrialGame1;