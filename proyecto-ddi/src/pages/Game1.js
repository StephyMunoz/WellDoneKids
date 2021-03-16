import React from "react";
import "../styles/game.css";
import withAuth from "../hocs/withAuth";
import Questions from "../components/Questions";

const Game1 = ({ subject }) => {
  return (
    <>
      <Questions selectSubject={subject} />
    </>
  );
};

export default withAuth(Game1);
