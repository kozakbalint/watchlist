import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watched } from "./components/Watched";
import { Watchlist } from "./components/Watchlist";
import { AddMovie } from "./components/AddMovie";
import { AddShow } from "./components/AddShow";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Watchlist />
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>
          <Route path="/addmovie">
            <AddMovie />
          </Route>
          <Route path="/addshow">
            <AddShow />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
