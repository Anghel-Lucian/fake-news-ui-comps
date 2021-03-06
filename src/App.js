import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { UserLogin, Button, TruthScore } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        {/* <NavBar /> */}
        <div className="main-view">
          <Switch>
            <Route path="/register" exact component={UserLogin} />
            {/* <Route path="/history" exact component={SearchHistory} />
            <Route path="/truth-score" exact component={TruthScore} /> */}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
