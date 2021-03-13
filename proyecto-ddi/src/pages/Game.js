import { db } from "../firebase";
import React, { useState, useEffect } from "react";
import "../styles/game.css";
import { Button, Col, Row, Select } from "antd";
import GameNav from "../components/GameNav";
import Routes from "../constants/Routes";
import { Link } from "react-router-dom";
import withAuth from "../hocs/withAuth";
import Questions from "../components/Questions";
import { onHidden } from "web-vitals/dist/modules/lib/onHidden";

const { Option } = Select;

const Game = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questionList, setQuestionList] = useState([]);
  const [radioState, setRadioState] = useState(0);
  const [score, setScore] = useState(0);
  const [subject, setSubject] = useState(null);

  const onChange = (e) => {
    setRadioState({
      value: e.target.value,
    });
  };

  useEffect(() => {
    const getQuestions = async () => {
      db.ref("Subjects/0/questions/0/question").on("value", (snapshot) => {
        const questions = [];
        snapshot.forEach((question) => {
          const q = question.val();
          questions.push(q);
        });
        setQuestionList(questions);
        console.log("questions", questionList);
        setSubject(subject);
        console.log("sub from ques", subject);
      });
    };
    getQuestions();
    return () => {
      db.ref("Subjects/0/questions/0/question").off();
    };
  }, []);

  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };

  const handleQuestionChange = (questionNumber) => {
    console.log(value);
    if (value === questionList[questionNumber].correct_answer) {
      setScore(score + 1);
      setQuestionNumber(questionNumber + 1);
      console.log("opcion seleccionada", radioState);
      console.log("puntaje", score);
      console.log("numero pregunta", questionNumber);
    } else {
      console.log("respuesta incorrecta");
      alert("Respuesta incorrecta. La explicación completa....");
      console.log("sub from ques", subject);
    }
  };
  const { value } = radioState;
  function handleChange(value) {
    console.log(`selected ${value}`);

    setSubject(value);
  }
  // const handleChangePage = () => {
  //     return(Routes.TRIALGAME4);
  // }

  return (
    <div className="Game">
      <GameNav />
      <Row justify="center">
        <Col justify="center">
          <Select
            defaultValue="Ingresa la materia que deseas estudiar"
            style={{ width: 320 }}
            onChange={handleChange}
          >
            <Option value="Math">Mate</Option>
            <Option value="Language">Lenguaje</Option>
            <Option value="English">Inglés</Option>
          </Select>
        </Col>
      </Row>
      <Row justify="center">
        <Col justify="center">
          {/*<Questions subject={subject} show={false}/>*/}
          <Link to={Routes.GAME1}>
            <Button type="primary">SIGUIENTE :)</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
export default withAuth(Game);
