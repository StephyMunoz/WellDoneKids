import React from 'react';
import '../styles/game.css';
import {Button, Row, Col} from "antd";
import GameTrialNav from "../components/GameTrialNav";
import ReactPlayer from 'react-player';
import Routes from "../constants/Routes";
import {Link} from "react-router-dom";

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
                    <Link to={Routes.TRIALGAME3}>
                        <Button type="primary" >CONTINUAR :)</Button>
                    </Link>
                </Col>
            </Row>
        </div>
    );
}
export default TrialGame2;