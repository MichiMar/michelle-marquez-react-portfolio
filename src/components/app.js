import React, { Component } from "react";
import moment from "moment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavigationContainer from "./navigation/navigation-container";
import Home from "./Pages/home";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Blog from "./Pages/blog";
import BlogDetail from "./Pages/blog-detail";
import PortfolioManager from "./Pages/portfolio-manager";
import PortfolioDetail from "./portfolio/portfolio-detail";
import Auth from "./Pages/auth";
import NoMatch from "./Pages/no-match";
import PortfolioContainer from "./portfolio/portfolio-container";
import Icons from "../helpers/icons";

export default class App extends Component {
  constructor(props) {
    super(props);

    Icons();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN",
    });
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
    });
  }

  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
    });
  }

  checkLoginStatus() {
    return axios
      .get("https://api.devcamp.space/logged_in", {
        withCredentials: true,
      })
      .then((response) => {
        const loggedIn = response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;

        if (loggedIn && loggedInStatus === "LOGGED_IN") {
          return loggedIn;
        } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN",
          });
        } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
          });
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  authorizedPages() {
    return [
      <Route
        key="portfolio-manager"
        path="/portfolio-manager"
        component={PortfolioManager}
      />,
    ];
  }

  render() {
    return (
      <div className="container">
        {/* date format in the top */}
        {/* <div className="date-moment">{moment().format("MMMM Do YY")}</div> */}

        <Router>
          <div>
            <NavigationContainer
              loggedInStatus={this.state.loggedInStatus}
              handleSuccessfulLogout={this.handleSuccessfulLogout}
            />

            <Switch>
              <Route exact path="/" component={Home} />

              <Route
                path="/auth"
                render={(props) => (
                  <Auth
                    {...props}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                  />
                )}
              />

              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />

              <Route
                path="/blog"
                render={(props) => (
                  <Blog {...props} loggedInStatus={this.state.loggedInStatus} />
                )}
              />

              <Route
                path="/b/:slug"
                render={(props) => (
                  <BlogDetail
                    {...props}
                    loggedInStatus={this.state.loggedInStatus}
                  />
                )}
              />
              {this.state.loggedInStatus === "LOGGED_IN"
                ? this.authorizedPages()
                : null}
              <Route
                exact
                path="/portfolio/:slug"
                component={PortfolioDetail}
              />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
