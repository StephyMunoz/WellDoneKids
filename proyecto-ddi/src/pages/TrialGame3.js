import React from 'react';
import '../styles/game.css';
import {Button, Col, Row} from "antd";
import GameTrialNav from "../components/GameTrialNav";
import Routes from "../constants/Routes";
import {Link} from "react-router-dom";

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
                    <Button type="primary" >SALIR :(</Button>
                </Col>
            </Row>
            <Row justify='center'>
                <Col>
                    <Link to={Routes.LOGIN}>
                        <Button type="primary" >CREAR CUENTA :)</Button>
                    </Link>
                </Col>
            </Row>
        </div>
    );
}
export default TrialGame3;