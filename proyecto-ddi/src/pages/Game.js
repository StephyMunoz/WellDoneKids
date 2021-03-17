import { db } from "../firebase";
import React, { useState } from "react";
import "../styles/game.css";
import { Button, Col, message, Row, Select } from "antd";
import GameNav from "../components/GameNav";
import Routes from "../constants/Routes";
import { Link } from "react-router-dom";
import withAuth from "../hocs/withAuth";
import Questions from "../components/Questions";
import { onHidden } from "web-vitals/dist/modules/lib/onHidden";
import Game1 from "./Game1";

const { Option } = Select;

const Game = () => {
  const [subject, setSubject] = useState("Math");
  const [nextPage, setNextPage] = useState(false);
  function handleChange(value) {
    console.log(`selected ${value}`);

    setSubject(value);
  }
  const handleChangePage = () => {
    if (!!subject) {
      setNextPage(true);
    } else {
      message.error("Por favor selecciona una materia para poder continuar");
    }
  };

  return (
    <div className="Game">
      {nextPage === false ? (
        <div>
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

              <Button type="primary" onClick={handleChangePage}>
                SIGUIENTE :)
              </Button>
            </Col>
          </Row>
        </div>
      ) : (
        <Game1 subject={subject} />
      )}
    </div>
  );
};
export default withAuth(Game);
