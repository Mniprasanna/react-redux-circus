import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

import Home from "./Home";
import Books from "./Books";
import Houses from "./Houses";
import NotFound from "./NotFound";

const CircusSocialContent = () => (
  <div>
    <div className="row">
      <div className="col-md-12">
        <Router>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
              <Link className="navbar-brand" href="/">
              ICE AND FIRE
        </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" exact to="/">
                      Home
              </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" exact to="/books">
                      Books
              </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" exact to="/houses">
                      Houses
              </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <br />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/houses" component={Houses} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    </div>
  </div>
);

export default CircusSocialContent;
