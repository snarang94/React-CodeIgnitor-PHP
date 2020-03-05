import React, { Component } from "react";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Player_Upload from "./Player_Upload";
import Player_All from "./Player_All";
import Player_Specific from "./Player_Specific";

class Main extends Component {
  render() {
    return (
      <HashRouter>
      <div>
      <h1>Simple SPA For Athletes</h1>
      <ul className="header">
      <li><NavLink exact to="/">Upload Athlete</NavLink></li>
      <li><NavLink to="/player_all">Athletes</NavLink></li>
      <li><NavLink to="/player_specific">Specific Athlete</NavLink></li>
      </ul>
      <div className="content">
      <Route exact path="/" component={Player_Upload}/>
      <Route path="/player_all" component={Player_All}/>
      <Route path="/player_specific" component={Player_Specific}/>
      </div>
      </div>
      </HashRouter>
    );
  }
}

export default Main;
