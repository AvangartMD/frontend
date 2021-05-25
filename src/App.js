import "./App.css";
import React from "react";
import { Helmet } from "react-helmet";
// import Notifications from 'react-notify-toast';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import Home from "./components/Home";

import AuthLayout from "./layouts/Auth";
import UserLayout from "./layouts/User";
import { PrivateRoute,  }  from "./views/PrivateRoute";
import { PublicRoute }  from "./views/PublicRoute";


class App extends React.Component {

  render() {
    const isLoggedIn = localStorage.getItem('token') ? true : false;

    return (
      <div className="App">
          <Helmet>
              <meta property="og:type" content="website" />
              <meta property="og:url" content="http://localhost:3000" />
              <meta property="og:title" content="Landing Page Title — Preview, Edit and Generate" />
              <meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
              <meta property="og:image" content="" />
          </Helmet>
          <BrowserRouter>
            <Switch>
                  <PrivateRoute
                      path="/user"
                      component={(props) => <UserLayout {...props} />}
                  />
                  <PublicRoute
                      path="/"
                      component={(props) => <AuthLayout {...props} isLoggedIn={isLoggedIn} />}
                  />
                {
                    isLoggedIn ? <Redirect to="/user" from="/" /> :
                      <Redirect from="/user" to="/" />
                }
            </Switch>
          </BrowserRouter>
          {/* <Notifications /> */}
      </div>
    );
  }
}

export default App;
