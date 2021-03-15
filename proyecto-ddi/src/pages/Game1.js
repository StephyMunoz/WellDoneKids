import React from "react";
import "../styles/game.css";
import withAuth from "../hocs/withAuth";
import Questions from "../components/Questions";

const Game1 = (props) => {
  const subject = props.subject;
  console.log("sub from game", subject);
  return (
    <>
      <Questions />
    </>
  );
};

export default withAuth(Game1);
