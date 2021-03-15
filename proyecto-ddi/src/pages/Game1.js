import React from "react";
import "../styles/game.css";
import withAuth from "../hocs/withAuth";
import Questions from "../components/Questions";

const Game1 = () => {
  return <>{<Questions />}</>;
};

export default withAuth(Game1);
