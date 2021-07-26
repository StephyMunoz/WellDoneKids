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

import Login from "../pages/Login";

import Game from "../pages/Game";
import Game1 from "../pages/Game1";
import Game2 from "../pages/Game2";
import Game3 from "../pages/Game3";
import Routes from "../constants/Routes";
import { AuthProvider } from "../lib/auth";
import Register from "../pages/Register";
import PayPal from "../pages/PayPal";

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
              <Route exact path={Routes.USERSPROFILE}>
                <Home />
              </Route>
              <Route exact path={Routes.TRIALGAME1}>
                <TrialGame1 />
              </Route>
              <Route exact path={Routes.TRIALGAME2}>
                <TrialGame2 />
              </Route>
              <Route exact path={Routes.TRIALGAME3}>
                <TrialGame3 />
              </Route>
              <Route exact path={Routes.INFO}>
                <InfoPage />
              </Route>
              <Route exact path={Routes.LOGIN}>
                <Login />
              </Route>
              <Route exact path={Routes.GAME}>
                <Game />
              </Route>
              <Route exact path={Routes.GAME1}>
                <Game1 />
              </Route>
              <Route exact path={Routes.GAME2}>
                <Game2 />
              </Route>
              <Route exact path={Routes.GAME3}>
                <Game3 />
              </Route>
              <Route exact path={Routes.Register}>
                <Register />
              </Route>
              <Route exact path={Routes.PayPal}>
                <PayPal />
              </Route>
            </Switch>
          </MainLayout>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
