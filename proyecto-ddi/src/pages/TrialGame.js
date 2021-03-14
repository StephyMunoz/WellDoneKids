import React, {useState} from "react";
import "../styles/game.css";
import { Button, Col, Row, Select } from "antd";
import GameTrialNav from "../components/GameTrialNav";
import { Link } from "react-router-dom";
import Routes from "../constants/Routes";
import withoutAuth from "../hocs/withoutAuth";
import TrialGame1 from "./TrialGame1";

const { Option } = Select;

const TrialGame = () => {
  const [age, setAge] = useState(0);
  function handleChange(value) {

    setAge(value);


  }


  return (
    <div className="TrialGame">
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
          <Link to={Routes.TRIALGAME1} age={age}>
            <Button type="primary" >
              SIGUIENTE :)
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
export default withoutAuth(TrialGame);
