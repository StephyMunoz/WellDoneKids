import React from 'react';
import '../styles/game.css';
import {Row, Col} from "antd";
import GameTrialNav from "../componentes/GameTrialNav";
import ReactPlayer from 'react-player';

const TrialGame2 = () => {

    return(
        <div className="TrialGame">
            <GameTrialNav />
            <Row justify='center'>
                <Col justify='center'>
                    <h1>Buen trabajo!!!</h1>
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
                            
                        />
                    </div>
                </Col>
            </Row>
            <Row justify='center'>
                <Col>
                    <button type="primary" >CONTINUAR :)</button>
                </Col>
            </Row>
        </div>
    );
}
export default TrialGame2;