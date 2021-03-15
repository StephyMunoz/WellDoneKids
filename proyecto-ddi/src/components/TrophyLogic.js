import React, { useState } from "react";
import { Col, Collapse, Image, Row } from "antd";
import trophy_n from "../images/trophies/trophy_not_unlocked.jpg";
import trophy_u from "../images/trophies/trophy_unlocked.png";
import cute_trophy from "../images/trophies/cute-trophy.jpg";
import first_medal from "../images/trophies/first-medal.png";
import trophy_1 from "../images/trophies/trophy1.jpg";
import trophy_2 from "../images/trophies/trophy2.jpg";
import trophy_3 from "../images/trophies/trophy3.jpg";
import trophy_4 from "../images/trophies/trophy4.jpg";
import trophy_5 from "../images/trophies/trophy5.jpg";
import trophy_6 from "../images/trophies/trophy6.jpg";
import trophy_7 from "../images/trophies/trophy7.jpg";
import trophy_8 from "../images/trophies/trophy8.jpg";
import trophy_9 from "../images/trophies/trophy9.png";
import trophy_10 from "../images/trophies/trophy10.jpg";

const TrophyLogic = () => {
  const [score, setScore] = useState(0);

  const getTrophies = [
    {
      id: 1,
      true: first_medal,
      false: trophy_n,
    },
    {
      id: 2,
      true: cute_trophy,
      false: trophy_n,
    },
    {
      id: 3,
      true: trophy_1,
      false: trophy_n,
    },
    {
      id: 4,
      true: trophy_2,
      false: trophy_n,
    },
    {
      id: 5,
      true: trophy_3,
      false: trophy_n,
    },
    {
      id: 6,
      true: trophy_4,
      false: trophy_n,
    },
    {
      id: 7,
      true: trophy_5,
      false: trophy_n,
    },
    {
      id: 8,
      true: trophy_6,
      false: trophy_n,
    },
    {
      id: 9,
      true: trophy_7,
      false: trophy_n,
    },
    {
      id: 10,
      true: trophy_8,
      false: trophy_n,
    },
  ];
  console.log("trofeos", getTrophies);
  return (
    <>
      <div id="trophy">
        <Row align="middle">
          <h1>{getTrophies}</h1>
          <Col span={6}>
            <Image
              height={100}
              width={100}
              src={trophy_n}
              alt="No image found"
            />
          </Col>
          <Col span={16}>
            <h3>Buen trabajo! (no desbloqueado)</h3>
            <h4>Obten tu primer video de recompensa</h4>
          </Col>
        </Row>
      </div>
      <div id="trophy">
        <Row align="middle">
          <Col span={6}>
            <Image
              height={100}
              width={100}
              src={trophy_u}
              alt="No image found"
            />
          </Col>
          <Col span={16}>
            <h3>La aventura comienza! (desbloqueado)</h3>
            <h4>Realiza tu primera actividad</h4>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default TrophyLogic;
