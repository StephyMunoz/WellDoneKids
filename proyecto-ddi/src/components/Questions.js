import React from 'react';
import {useEffect, useState} from 'react';
import '../styles/game.css';
import {Spin, Button, Col, Input, Row, Radio} from "antd";
import GameNav from "../components/GameNav";
import Routes from "../constants/Routes";
import {Link} from "react-router-dom";
import withAuth from "../hocs/withAuth";
import {db} from '../firebase';
import {subject} from "../pages/Game";
import Game from "../pages/Game";


const Questions = () => {
    const [questionNumber, setQuestionNumber] = useState(0);
    const [questionList, setQuestionList] = useState([]);
    const [radioState, setRadioState] = useState(0);
    const [score, setScore] = useState(0);
    const [subject, setSubject] = useState(null);

    const onChange = e => {
        setRadioState({
            value: e.target.value
        });
    };

    useEffect( () => {
        const getQuestions = async() => {
            db.ref('Subjects/0/questions/0/question').on('value', (snapshot) => {
                const questions = [];
                snapshot.forEach((question) => {
                    const q = question.val();
                    questions.push(q);
                });
                setQuestionList(questions);
                console.log('questions', questionList);
                setSubject(subject);
                console.log('sub from ques', subject);
            });
        };
        getQuestions();
        return () => {
            db.ref('Subjects/0/questions/0/question').off();
        };
    }, []);

    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    };


    const handleQuestionChange = (questionNumber) => {
        console.log(value);
        if (value === questionList[questionNumber].correct_answer) {
            setScore(score + 1);
            setQuestionNumber(questionNumber + 1);
            console.log('opcion seleccionada', radioState)
            console.log('puntaje', score)
            console.log('numero pregunta', questionNumber)
        } else {
            console.log('respuesta incorrecta')
            alert('Respuesta incorrecta. La explicación completa....');
            console.log('sub from ques', subject);
        }

    }
    const {value} = radioState;

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
export default Questions;