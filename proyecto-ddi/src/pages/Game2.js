import React, { useEffect, useState } from "react";
import "../styles/game.css";
import { Button, Col, Row } from "antd";
import GameNav from "../components/GameNav";
import ReactPlayer from "react-player";
import Routes from "../constants/Routes";
import { Link } from "react-router-dom";
import withAuth from "../hocs/withAuth";
import { Username } from "../components/Username";
import { db } from "../firebase";

const Game2 = () => {
  const [videoList, setVideoList] = useState([]);
  const random = Math.round(Math.random() * 28);
  //const getRandom = Math.round(Math.random() * 3);
  const { username } = Username();

  useEffect(() => {
    const getVideos = async () => {
      db.ref(`videos/${random}`).on("value", (snapshot) => {
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
  }, []);

  return (
    <div className="Game">
      <GameNav />
      <Row justify="center">
        <Col justify="center">
          <h1>Buen trabajo {username}</h1>
          <h1>Disfruta este video que hemos</h1>
          <h1>preparado para ti.</h1>
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
          <Link to={Routes.GAME3}>
            <Button type="primary">CONTINUAR :)</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
export default withAuth(Game2);
