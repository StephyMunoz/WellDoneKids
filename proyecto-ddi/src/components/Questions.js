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
import { Username } from "../components/Username";
import { useAuth } from "../lib/auth";

const Questions = ({ selectSubject }) => {
  const { user } = useAuth();
  const [questionNumber, setQuestionNumber] = useState(1);
  const [questionList, setQuestionList] = useState([]);
  const [radioState, setRadioState] = useState(0);
  const [gameScore, setGameScore] = useState(user.score);
  const [gameMistakes, setGameMistakes] = useState(user.mistakes);
  //const [subject, setSubject] = useState(0);

  let number = -1;
  let age = 0;

  const onChange = (e) => {
    setRadioState({
      value: e.target.value,
    });
  };

  const random = Math.round(Math.random() * 10);

  useEffect(() => {
    const getQuestions = async () => {
      if (selectSubject === "English") {
        number = 0;
      } else if (selectSubject === "Math") {
        number = 1;
        console.log("uno", number);
      } else {
        number = 2;
        console.log("dlan", number);
      }

      if (user.selectedYear === 6 || user.selectedYear === 7) {
        age = 0;
      } else if (user.selectedYear === 8 || user.selectedYear === 9) {
        age = 1;
      } else {
        age = 2;
      }

      //if (number >= 0) {
      db.ref(`subjects/${number}/questions/${age}`).on("value", (snapshot) => {
        const questions = [];
        snapshot.forEach((question) => {
          const q = question.val();
          questions.push(q);
        });
        setQuestionList(questions);
        // setSubject(selecSubject);
      });
      // }
    };
    getQuestions();
    return () => {
      db.ref(`subjects/${number}/questions/${age}`).off();
    };
  }, []);

  const uploadScore = (gameScore) => {
    db.ref(`users/${user.uid}/score`).set(gameScore);
  };

  const uploadMistakes = (gameMistakes) => {
    db.ref(`users/${user.uid}/mistakes`).set(user.mistakes + gameMistakes);
  };

  const uploadScores = (gameScore, gameMistakes) => {
    uploadScore(gameScore);
    uploadMistakes(gameMistakes);
  };

  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };

  const handleQuestionChange = (questionNumber) => {
    console.log(value);
    if (value === questionList[questionNumber].correct_answer) {
      setGameScore(gameScore + 1);
      uploadScore(gameScore);
      setQuestionNumber(questionNumber + 1);
      console.log("user score", user.score);

      setQuestionNumber(random);
      console.log("puntaje", gameScore);
    } else {
      console.log("respuesta incorrecta");
      alert("Respuesta incorrecta. Intentalo de nuevo :)");
      setGameMistakes(gameMistakes + 1);
      console.log("sub from ques", selectSubject);
    }
  };
  const { value } = radioState;
  if (gameScore % 10 === 0) {
    console.log("cuanto", gameScore % 10);
  }

  return (
    <>
      {(user.score === 70) ^ (user.score === 80) ? (
        questionList.length > 0 ? (
          <div className="Game">
            <GameNav />
            <Row>
              <Col span={4} offset={4}>
                <h1>Puntaje: {gameScore}</h1>
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
              <h1>{user.username}, Estamos muy orgullosos de ti!!</h1>
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
