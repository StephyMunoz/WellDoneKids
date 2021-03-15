import React from "react";
import { useEffect, useState } from "react";
import "../styles/game.css";
import { Spin, Button, Col, Input, Row, Radio } from "antd";
import GameNav from "../components/GameNav";
import Routes from "../constants/Routes";
import { Link } from "react-router-dom";
import withAuth from "../hocs/withAuth";
import { db } from "../firebase";
//import {subject} from "../pages/Game";
import Game from "../pages/Game";

const Questions = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [questionList, setQuestionList] = useState([]);
  const [radioState, setRadioState] = useState(0);
  const [score, setScore] = useState(0);
  const [subject, setSubject] = useState(0);

  const onChange = (e) => {
    setRadioState({
      value: e.target.value,
    });
  };

  const random = Math.round(Math.random() * 20);

  useEffect(() => {
    const getQuestions = async () => {
      db.ref("Subjects/" + subject + "/questions/0/question").on(
        "value",
        (snapshot) => {
          const questions = [];
          snapshot.forEach((question) => {
            const q = question.val();
            questions.push(q);
          });
          setQuestionList(questions);
          // console.log('questions', questionList);
          setSubject(subject);
          // console.log('sub from ques', subject);
        }
      );
    };
    getQuestions();
    return () => {
      db.ref("Subjects/" + subject + "/questions/0/question").off();
    };
  }, []);

  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };

  const { value } = radioState;

  const handleQuestionChange = (questionNumber) => {
    console.log(value);
    if (value === questionList[questionNumber].correct_answer) {
      setScore(score + 1);
      setQuestionNumber(random);
      console.log("opcion seleccionada", radioState);
      console.log("puntaje", score);
      console.log("numero pregunta", questionNumber);
    } else {
      console.log("respuesta incorrecta");
      alert("Respuesta incorrecta. Intentalo de nuevo :)");
      console.log("sub from ques", subject);
    }
  };

  return (
    <>
      {score <= 10 ? (
        questionList.length > 0 ? (
          <div className="Game">
            <GameNav />
            <Row>
              <Col span={4} offset={4}>
                <h1>Puntaje: {score}</h1>
              </Col>
            </Row>
            <Row justify="center">
              <Col justify="center">
                <h1>{questionList[questionNumber].text}</h1>
              </Col>
            </Row>
            <Row justify="center">
              <Col>
                <Radio.Group onChange={onChange} value={value}>
                  {questionList.length > 0 ? (
                    questionList[questionNumber].options.map((option, i) => {
                      return (
                        <Radio style={radioStyle} value={option}>
                          {option}
                        </Radio>
                      );
                    })
                  ) : (
                    <Spin />
                  )}
                </Radio.Group>
              </Col>
            </Row>
            <Row justify="center">
              <Col>
                <Button
                  type="primary"
                  onClick={() => handleQuestionChange(questionNumber)}
                >
                  LISTO :)
                </Button>
              </Col>
            </Row>
            <Row justify="center">
              <Col>
                <Link to={Routes.GAME4}>
                  <Button type="primary">Necesito ayuda :(</Button>
                </Link>
              </Col>
            </Row>
          </div>
        ) : (
          "Cargando pregunta..."
        )
      ) : (
        <div className="Game">
          <GameNav />
          <Row justify={"center"}>
            <Col>
              <h1>Estamos muy orgullosos de ti!!</h1>
              <Link to={Routes.GAME2}>
                <Button>Ir a recompensa!</Button>
              </Link>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};
export default Questions;
