import React from 'react';
import '../styles/game.css';
import {Col, Row, Select} from "antd";
import GameTrialNav from "../componentes/GameTrialNav";
const { Option } = Select;

const TrialGame = () => {
    function handleChange(value) {
        console.log(`selected ${value}`);
    }
    return(
        <div className="TrialGame">
            <GameTrialNav />
            <Row justify='center'>
                <Col justify='center'>
                    <Select defaultValue="Ingrese la edad del niño o niña" style={{ width: 320 }} onChange={handleChange}>
                        <Option value="6">6 años</Option>
                        <Option value="7">7 años</Option>
                        <Option value="8">8 años</Option>
                        <Option value="9">9 años</Option>
                        <Option value="10">10 años</Option>
                        <Option value="11">11 años</Option>
                    </Select>
                </Col>
            </Row>
            <Row justify='center'>
                <Col justify='center'>
                    <button type="primary" >SIGUIENTE :)</button>
                </Col>
            </Row>
        </div>
    );
}
export default TrialGame;