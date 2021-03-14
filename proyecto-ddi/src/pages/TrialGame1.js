import React, {useEffect, useState} from "react";
import "../styles/game.css";
import {Button, Col, message, Radio, Row, Spin} from "antd";
import GameTrialNav from "../components/GameTrialNav";
import Routes from "../constants/Routes";
import { Link } from "react-router-dom";
import withoutAuth from "../hocs/withoutAuth";
import {db} from "../firebase";
import TrialGame from "./TrialGame";

const TrialGame1 = () => {
    const [questionNumber, setQuestionNumber] = useState(0);
    const [questionList, setQuestionList] = useState([]);
    const [radioState, setRadioState] = useState(0);
    const [score, setScore] = useState(0);
    //const [age, setAge] = useState(6);
    const [videoList, setVideoList] = useState([]);
    //const {age} = TrialGame();

    const onChange = e => {
        setRadioState({
            value: e.target.value
        });
    };
    //console.log('tri', age);

    useEffect( () => {
        const getQuestions = async() => {
            db.ref('Subjects/3/questions').on('value', (snapshot) => {
                const questions = [];
                snapshot.forEach((question) => {
                    const q = question.val();
                    questions.push(q);
                });
                setQuestionList(questions);
                console.log('trial question', questionList);
                //console.log('age fron trial', age);
            });
        };
        getQuestions();
        return () => {
            db.ref('Subjects/3/questions').off();
        };
    }, []);

    useEffect( () => {
        const getVideos = async() => {
            db.ref('videos/0/url_videos/0/url').on('value', (snapshot) => {
                const videos = [];
                snapshot.forEach((video) => {
                    const vid = video.val();
                    videos.push(vid);
                });
                setVideoList(videos);
                console.log('video', videoList);
            });
        };
        getVideos();
        return () => {
            db.ref('videos/0/url_videos/0/url').off();
        };
    }, []);

    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    };
    const error = () => {
        message.error('Respuesta incorrecta, intenta de nuevo =) !!! ');
    };
    const handleQuestionChange = (questionNumber) => {
        console.log(value);
        if (value === questionList[questionNumber].correct_answer) {
            setScore(score + 1);
            setQuestionNumber(questionNumber + 1);
        } else {
            error();

        }

    }
    const {value} = radioState;
    return(
        <>
            {
                score <= 10 ?
                    questionList.length > 0 || videoList.length > 0?
                        <div className="TrialGame">
                            <GameTrialNav />
                            <h1> Tu puntaje: {score}</h1>
                            <Row justify='center'>
                                <Col justify='center'>
                                    <h1>{questionList[questionNumber].text}</h1>
                                    {/*<h1>{video[questionNumber]}</h1>*/}
                                </Col>
                            </Row>
                            <Row justify='center'>
                                <Col>
                                    <Radio.Group onChange={onChange} value={value}>
                                        {
                                            questionList.length > 0 ?
                                                questionList[questionNumber].options.map((option, i) => {
                                                    return (
                                                        <h1>
                                                            <Radio style={radioStyle} value={option}>
                                                                {option}
                                                            </Radio>
                                                        </h1>)
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
                        : <Spin />
                        // : videoList.length > 0
                        // ? <TrialGame2 videos={videoList} />
                        : <Spin />
            }
        </>
    );
};
export default withoutAuth(TrialGame1);
