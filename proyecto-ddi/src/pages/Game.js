import {db} from "../firebase";
import React from 'react';
import '../styles/game.css';
import {Button, Col, Row, Select} from "antd";
import GameNav from "../componentes/GameNav";
const { Option } = Select;


const Game = () => {
    function handleChange(value) {
        console.log(`selected ${value}`);
    }
    // const handleChangePage = () => {
    //     return(Routes.TRIALGAME4);
    // }
    const handleSave = () => {
        db.ref('users/ID_UNICO').set({
           username: "stephy",
           lastname: "munoz",
           email: "stef_19_yo@hotmail.com"
        });
    }
    return(
        <div className="Game">
            <GameNav />
            <Row justify='center'>
                <Col justify='center'>
                    <Select defaultValue="Ingresa la materia que deseas estudiar" style={{ width: 320 }} onChange={handleChange}>
                        <Option value="Math">Mate</Option>
                        <Option value="Language">Lenguaje</Option>
                        <Option value="English">Inglés</Option>
                    </Select>
                </Col>
            </Row>
            <Row justify='center'>
                <Col justify='center'>
                    <Button type="primary" onClick={handleSave}>SIGUIENTE :)</Button>
                </Col>
            </Row>
        </div>
    );
}
export default Game;