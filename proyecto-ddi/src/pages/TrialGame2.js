import React, { useEffect, useState } from "react";
import "../styles/game.css";
import { Button, Col, Row, Spin } from "antd";
import GameTrialNav from "../components/GameTrialNav";
import ReactPlayer from "react-player";
import Routes from "../constants/Routes";
import { Link } from "react-router-dom";
import withoutAuth from "../hocs/withoutAuth";
import { db } from "../firebase";

const TrialGame2 = () => {
  const [videoList, setVideoList] = useState([]);
  const random = Math.round(Math.random() * 28);

  useEffect(() => {
    const getVideos = async () => {
      await db.ref(`videos/${random}`).once("value", (snapshot) => {
        const videos = [];
        snapshot.forEach((video) => {
          const vid = video.val();
          videos.push(vid);
        });
        setVideoList(videos);
      });
    };
    getVideos();
    return () => {
      db.ref(`videos/${random}`).off();
    };
  }, [random]);

  return (
    <>
      {videoList ? (
        <div className="TrialGame">
          <GameTrialNav />
          <Row justify="center">
            <Col justify="center">
              <h1>Disfruta este video que hemos preparado para ti.</h1>
              <h1>Te lo has ganado</h1>
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <div>
                <ReactPlayer
                  url={videoList[1]}
                  className="react-player"
                  playing
                  width="60em"
                  height="30em"
                />
              </div>
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <Link to={Routes.TRIALGAME3}>
                <Button type="primary">CONTINUAR :)</Button>
              </Link>
            </Col>
          </Row>
        </div>
      ) : (
        <Spin />
      )}
    </>
  );
};
export default withoutAuth(TrialGame2);
