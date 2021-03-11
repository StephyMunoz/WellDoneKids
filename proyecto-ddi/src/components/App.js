import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TrialGame from "../pages/TrialGame";
import Home from "../pages/Home";
import MainLayout from "./MainLayout";
import Landing from "../pages/Landing";
import InfoPage from "../pages/InfoPage";
import TrialGame1 from "../pages/TrialGame1";
import TrialGame2 from "../pages/TrialGame2";
import TrialGame3 from "../pages/TrialGame3";
import TrialGame4 from "../pages/TrialGame4";

import Login from "../pages/Login";

import Game from "../pages/Game";
import Game1 from "../pages/Game1";
import Game2 from "../pages/Game2";
import Game3 from "../pages/Game3";
import Game4 from "../pages/Game4";
import Routes from "../constants/Routes";
import { AuthProvider } from "../lib/auth";
import Register from "../pages/Register";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <MainLayout>
            <Switch>
              <Route exact path="/">
                <Landing />
              </Route>
              <Route exact path={Routes.TRIALGAME}>
                <TrialGame />
              </Route>
              <Route exact path="/usersprofile">
                <Home />
              </Route>
              <Route exact path="/trialgame1">
                <TrialGame1 />
              </Route>
              <Route exact path="/trialgame2">
                <TrialGame2 />
              </Route>
              <Route exact path="/trialgame3">
                <TrialGame3 />
              </Route>
              <Route exact path="/trialgame4">
                <TrialGame4 />
              </Route>
              <Route exact path="/infopage">
                <InfoPage />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/game">
                <Game />
              </Route>
              <Route exact path="/game1">
                <Game1 />
              </Route>
              <Route exact path="/game2">
                <Game2 />
              </Route>
              <Route exact path="/game3">
                <Game3 />
              </Route>
              <Route exact path="/game4">
                <Game4 />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
            </Switch>
          </MainLayout>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
