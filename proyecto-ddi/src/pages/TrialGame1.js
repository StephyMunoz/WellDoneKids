import React, { useEffect, useState } from "react";
import "../styles/game.css";
import { Button, Col, message, Radio, Row, Spin, Image } from "antd";
import GameTrialNav from "../components/GameTrialNav";
import Routes from "../constants/Routes";
import { Link } from "react-router-dom";
import withoutAuth from "../hocs/withoutAuth";
import { db } from "../firebase";
import monster from "../images/monster.png";

const TrialGame1 = ({ age }) => {
  const [questionList, setQuestionList] = useState([]);
  const [radioState, setRadioState] = useState(0);
  const [score, setScore] = useState(0);
  const random = Math.round(Math.random() * 14);
  let number;
  const [questionNumber, setQuestionNumber] = useState(random);

  //const {age} = TrialGame();

  const onChange = (e) => {
    setRadioState({
      value: e.target.value,
    });
  };
  //console.log('tri', age);

  useEffect(() => {
    const getQuestions = async () => {
      if (age === "6" || age === "7") {
        number = 0;
      } else if (age === "8" || age === "9") {
        number = 1;
      } else {
        number = 2;
      }
      await db
        .ref(`subjects/3/questions/${number}`)
        .once("value", (snapshot) => {
          const questions = [];
          snapshot.forEach((question) => {
            const q = question.val();
            questions.push(q);
          });
          setQuestionList(questions);

          console.log("select age", number);
        });
    };
    getQuestions();
    return () => {
      db.ref(`subjects/3/questions/${number}`).off();
    };
  }, []);

  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };
  const error = () => {
    message.error("Respuesta incorrecta, intenta de nuevo =) !!! ");
  };
  const handleQuestionChange = (questionNumber) => {
    console.log(value);
    if (value === questionList[questionNumber].correct_answer) {
      setScore(score + 1);
      setQuestionNumber(random);
    } else {
      error();
    }
  };
  const { value } = radioState;

  return (
    <>
      {score <= 10 ? (
        questionList.length > 0 ? (
          <div className="TrialGame">
            <GameTrialNav />
            <h1> Tu puntaje: {score}</h1>
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
                        <h1>
                          <Radio style={radioStyle} value={option}>
                            {option}
                          </Radio>
                        </h1>
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
        // : videoList.length > 0
        // ? <TrialGame2 videos={videoList} />
        //<Spin />
        <div className="TrialGame">
          <GameTrialNav />
          <Row justify={"center"}>
            <Col>
              <h1>Estamos muy orgullosos de ti!!</h1>
              <Link to={Routes.TRIALGAME2}>
                <Button>Ir a recompensa!</Button>
              </Link>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};
export default withoutAuth(TrialGame1);
