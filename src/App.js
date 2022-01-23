import "./styles.css";
import SideBar from "./SideBar.js";

import Users from "./Users.js";

import Profiles from "./Profiles";
import CreateProfile from "./CreateProfile.js";
import EditProfile from "./EditProfile.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App" id="page-top">
      <div id="wrapper">
        <SideBar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Router>
              <Switch>
                <Route exact path="/" component={Users} />
                <Route exact path="/create-profile" component={CreateProfile} />
                <Route path="/edit-profile/:id" component={EditProfile} />
                <Route path="/users" component={Users} />
              </Switch>
            </Router>
          </div>
        </div>
      </div>

      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </div>
  );
}
