import React, { useState } from "react";
import "../styles/game.css";
import { Button, Col, message, Row, Select } from "antd";
import GameNav from "../components/GameNav";
import withAuth from "../hocs/withAuth";
import Game1 from "./Game1";
import monster from "../images/monster.png";

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
            <Col justify="initial">
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
          <Row justify="center">
            <Col>
              <img justify="center" src={monster} width={150}></img>
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
