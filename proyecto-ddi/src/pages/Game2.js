import React from 'react';
import '../styles/game.css';
import {Button, Row, Col} from "antd";
import GameNav from "../componentes/GameNav";
import ReactPlayer from 'react-player';

const Game2 = () => {

    return(
        <div className="Game">
            <GameNav />
            <Row justify='center'>
                <Col justify='center'>
                    <h1>Buen trabajo USERNAME!!!</h1>
                    <h1>Disfruta este video que hemos</h1>
                    <h1>preparado para ti.</h1>
                    <h1>Te lo has ganado</h1>
                </Col>
            </Row>
            <Row justify='center'>
                <Col>
                    <div>
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=W08ToPMihhw'
                            className='react-player'
                            playing
                            width='60em'
                            height='30em'
                            controls='true'
                        />
                    </div>
                </Col>
            </Row>
            <Row justify='center'>
                <Col>
                    <Button type="primary" >CONTINUAR :)</Button>
                </Col>
            </Row>
        </div>
    );
}
export default Game2;