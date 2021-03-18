import React, { useState } from "react";
import "../styles/game.css";
import { Button, Col, message, Row, Select, Image } from "antd";
import GameTrialNav from "../components/GameTrialNav";
import withoutAuth from "../hocs/withoutAuth";
import TrialGame1 from "./TrialGame1";
import monster from "../images/monster.png";

const { Option } = Select;

const TrialGame = () => {
  const [age, setAge] = useState(0);
  const [nextPage, setNextPage] = useState(false);
  function handleChange(value) {
    setAge(value);
  }
  const handleNext = () => {
    if (!!age) {
      setNextPage(true);
    } else {
      message.error("Por favor selecciona tu edad para continuar");
    }
  };

  return (
    <div className="TrialGame">
      {nextPage === false ? (
        <div>
          <GameTrialNav />
          <Row justify="center">
            <Col justify="center">
              <Select
                defaultValue="Ingrese la edad del niño o niña"
                style={{ width: 320 }}
                onChange={handleChange}
              >
                <Option value="6">6 años</Option>
                <Option value="7">7 años</Option>
                <Option value="8">8 años</Option>
                <Option value="9">9 años</Option>
                <Option value="10">10 años</Option>
                <Option value="11">11 años</Option>
              </Select>
            </Col>
          </Row>
          <Row justify="center">
            <Col justify="center">
              {/*<TrialGame1 age={age} />*/}
              {/*<Link to={Routes.TRIALGAME1} age={age}>*/}
              <Button type="primary" onClick={handleNext}>
                SIGUIENTE :)
              </Button>
              {/*</Link>*/}
            </Col>
          </Row>
          <Row justify="center">
            <Col span={{ sm: 24, md: 4 }}>
              <Image justify="center" src={monster} width={150} />
            </Col>
          </Row>
        </div>
      ) : (
        <TrialGame1 age={age} />
      )}
    </div>
  );
};
export default withoutAuth(TrialGame);
