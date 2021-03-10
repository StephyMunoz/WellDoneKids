import React from 'react';
import '../styles/game.css';
import {Button, Col, Row, Select} from "antd";
import GameTrialNav from "../components/GameTrialNav";
import {Link} from "react-router-dom";
import Routes from "../constants/Routes";
import withoutAuth from "../hocs/withoutAuth";

const { Option } = Select;


const TrialGame = () => {
    function handleChange(value) {
        console.log(`selected ${value}`);
    }
    const handleNext = () => {

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
                    <Link to={Routes.TRIALGAME1}>
                        <Button type="primary" onClick={handleNext}>SIGUIENTE :)</Button>
                    </Link>
                </Col>
            </Row>
        </div>
    );
}
export default withoutAuth(TrialGame);