import React, { useEffect, useState } from "react";
import "../styles/game.css";
import { Button, Col, message, Radio, Row, Spin, Image } from "antd";
import GameNav from "../components/GameNav";
import Routes from "../constants/Routes";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { useAuth } from "../lib/auth";
import monster from "../images/monster3.png";

const Questions = ({ selectSubject }) => {
  const { user } = useAuth();
  const [questionNumber, setQuestionNumber] = useState(1);
  const [questionList, setQuestionList] = useState([]);
  const [radioState, setRadioState] = useState(0);
  const [gameScore, setGameScore] = useState(0);

  const onChange = (e) => {
    setRadioState({
      value: e.target.value,
    });
  };

  const random = Math.round(Math.random() * 10);

  useEffect(() => {
    let number = 0,
      age = 0;
    const getQuestions = async () => {
      if (selectSubject === "English") {
        number = 0;
      } else if (selectSubject === "Math") {
        number = 1;
      } else {
        number = 2;
      }

      if (user.selectedYear === "6" || user.selectedYear === "7") {
        age = 0;
        console.log("uno", 0);
      } else if (user.selectedYear === "8" || user.selectedYear === "9") {
        age = 1;
      } else {
        age = 2;
      }

      db.ref(`subjects/${number}/questions/${age}`).on("value", (snapshot) => {
        const questions = [];
        snapshot.forEach((question) => {
          const q = question.val();
          questions.push(q);
        });
        setQuestionList(questions);
      });
    };
    getQuestions();
    return () => {
      db.ref(`subjects/${number}/questions/${age}`).off();
    };
  }, [selectSubject, user.selectedYear]);

  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };
  const { value } = radioState;

  const handleQuestionChange = async (questionNumber) => {
    if (value === questionList[questionNumber].correct_answer) {
      setGameScore(gameScore + 1);
      setQuestionNumber(random);
      await handleSaveScore();
    } else {
      await handleSaveMistake();
      message.error("Respuesta incorrecta, intenta de nuevo =) !!! ");
    }
  };
  const handleSaveScore = async () => {
    await db.ref(`users/${user.uid}/score`).set((user.score = user.score + 1));
  };
  const handleSaveMistake = async () => {
    await db
      .ref(`users/${user.uid}/mistakes`)
      .set((user.mistakes = user.mistakes + 1));
  };

  return (
    <>
      {gameScore < 10 ? (
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
                    questionList[questionNumber].options.map((option) => {
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
                <Image justify="center" src={monster} width={150} />
              </Col>
            </Row>
          </div>
        ) : (
          <Spin />
        )
      ) : (
        <div className="Game">
          <GameNav />
          <Row justify={"center"}>
            <Col>
              <h1>{user.username}, estamos muy orgullosos de ti!!!</h1>
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
