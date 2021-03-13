import React from 'react';
import {useEffect, useState} from 'react';
import '../styles/game.css';
import {Button, Col, Input, Row, Radio} from "antd";
import GameNav from "../components/GameNav";
import Routes from "../constants/Routes";
import {Link} from "react-router-dom";
import withAuth from "../hocs/withAuth";
import {db} from '../firebase';
import Game from "../pages/Game";




const Game1 = () => {


    return (
        <>
            {
                score < 10 ?
                    questionList.length > 0 ?
                        <div className="Game">
                            <GameNav />
                            <div> Puntaje: {score}</div>
                            <Row justify='center'>
                                <Col justify='center'>
                                    <h1>{questionList[questionNumber].text}</h1>
                                    <h1>{subject}</h1>
                                </Col>
                            </Row>
                            <Row justify='center'>
                                <Col>
                                    <Radio.Group onChange={onChange} value={value}>
                                        {
                                            questionList.length > 0 ?
                                            questionList[questionNumber].options.map((option, i) => {
                                                return <Radio style={radioStyle} value={option}>
                                                    {option}
                                                </Radio>
                                            }) : <Spin/>
                                        }
                                    </Radio.Group>
                                </Col>
                            </Row>
                            <Row justify='center'>
                                <Col>
                                    <Button type="primary" onClick={() => handleQuestionChange(questionNumber)}>
                                        LISTO :)
                                    </Button>

                                </Col>
                            </Row>
                            <Row justify='center'>
                                <Col>
                                    <Link to={Routes.GAME4}>
                                        <Button type="primary">Necesito ayuda :(</Button>
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                        : 'Cargando pregunta...'
                    : 'Video'// presentan el video
            }
        </>
    );
}
export default withAuth(Game1);