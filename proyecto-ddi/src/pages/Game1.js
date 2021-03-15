import React from "react";
import "../styles/game.css";
import withAuth from "../hocs/withAuth";
import Questions from "../components/Questions";

const Game1 = () => {
  return (
    <>
      hols questions
      {<Questions />}
    </>
  );
};
export default withAuth(Game1);
