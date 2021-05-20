import React from "react";
import { Route, Switch } from "react-router-dom";

import routes from "../routes";

// core components
import Header from "../components/Header";
import Footer from "../components/Footer";


class User extends React.Component {

    getRoutes = (routes) => {
        return routes.map( (prop, key) => {
            if (prop.layout === "/") {
                return (
                        <Route exact 
                            path={prop.layout + prop.path}
                            component={prop.component}
                            key={key}
                        />
                    );
            } else {
                return null;
            }
        })
    }

    render() {

        return(
            <>
                <Header />
                    <Switch>{this.getRoutes(routes)}</Switch>
                <Footer />
            </>
        )
    }
}

export default User;