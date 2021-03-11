import React from 'react';
import {useEffect, useState} from 'react';
import '../styles/game.css';
import {Button, Col, Input, Row, Radio} from "antd";
import GameNav from "../components/GameNav";
import Routes from "../constants/Routes";
import {Link} from "react-router-dom";
import withAuth from "../hocs/withAuth";
import {db} from '../firebase';



const Game1 = () => {

    var [questionNumber, setQuestionNumber] = useState(0);
    const [questionList, setQuestionList] = useState([]);
    var [radioState, setRadioState] = useState(0);
    var [score, setScore] = useState(0);

    const onChange = e => {
        setRadioState({
            value: e.target.value
        });
    };

    useEffect( () => {
        const getQuestions = async() => {
            db.ref('0/questions').on('value', (snapshot) => {
                const questions = [];
                snapshot.forEach((question) => {
                    const q = question.val();
                    questions.push({
                        instructions: q.text,
                        answer: q.correct_answer,
                        options: q.options
                    });
                });
                setQuestionList(questions);
            });
        };
        getQuestions();
        return () => {
            db.ref('0/questions').off();
        };
    }, []);
<<<<<<< HEAD

    const handleQuestionChange = (questionNumber) => {
        // if (questionList[questionNumber].options[radioState] === questionList[questionNumber].answer) {
        //     setScore(score + 1);
        //     setQuestionNumber(questionNumber + 1);
        // } else {
        //     console.log('opcion seleccionada', radioState)
        //     console.log('puntaje', score)
        //     console.log('numero pregunta', questionNumber)
        // }

    }


=======
    
>>>>>>> 0e6bb3b2d8e43f7f4286a32b12091727434cc916
    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    };

    const inst = questionList.map(question => {
        return question.instructions
    });

    const ops = questionList.map(question => {
        return question.options
    });
<<<<<<< HEAD
=======

    const ans = questionList.map(question => {
        return question.answer
    });

    const handleQuestionChange = (questionNumber) => {
        if (ops[questionNumber][radioState] === ans[questionNumber]) {
            setScore(score + 1);
            setQuestionNumber(questionNumber + 1);
            console.log('opcion seleccionada', radioState)
            console.log('puntaje', score)
            console.log('numero pregunta', questionNumber)
        } else {
            console.log('respuesta incorrecta')
        }
        
    }

>>>>>>> 0e6bb3b2d8e43f7f4286a32b12091727434cc916
    const {value} = radioState;
    return(
        <div className="Game">
            <GameNav />
            <Row justify='center'>
                <Col justify='center'>
                    <h1>{inst[questionNumber]}</h1>
                </Col>
            </Row>
            <Row justify='center'>
                <Col>
                    <Radio.Group onChange={onChange} value={value}>
                        <Radio style={radioStyle} value={0}>
                            {ops[questionNumber][0]}
                        </Radio>
                        <Radio style={radioStyle} value={1}>
                            {ops[questionNumber][1]}
                        </Radio>
                        <Radio style={radioStyle} value={2}>
<<<<<<< HEAD
                            {ops[questionNumber][2]}
=======
                            {ops[questionNumber][2]}  
>>>>>>> 0e6bb3b2d8e43f7f4286a32b12091727434cc916
                        </Radio>
                        <Radio style={radioStyle} value={3}>
                            {ops[questionNumber][3]}
                        </Radio>
                    </Radio.Group>
                </Col>
            </Row>
            <Row justify='center'>
                <Col>
                    <Link to = {Routes.GAME2}>
                        <Button type="primary" onClick={() => handleQuestionChange(questionNumber)} >LISTO :)</Button>
                    </Link>

                </Col>
            </Row>
            <Row justify='center'>
                <Col>
                    <Link to={Routes.GAME4}>
                        <Button type="primary" >Necesito ayuda :(</Button>
                    </Link>
                </Col>
            </Row>
        </div>
    );
}
export default withAuth(Game1);