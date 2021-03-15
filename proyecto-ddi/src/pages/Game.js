import React, { useState } from "react";
import "../styles/game.css";
import { Button, Col, Row, Select } from "antd";
import GameNav from "../components/GameNav";
import Routes from "../constants/Routes";
import { Link } from "react-router-dom";
import withAuth from "../hocs/withAuth";

const { Option } = Select;

const Game = () => {
  const [subject, setSubject] = useState(null);
  function handleChange(value) {
    // console.log(`selected ${value}`);

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
