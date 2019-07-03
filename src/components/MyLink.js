/* Defines a page link */
import { Route } from "gatsby";
import React from "react";

class MyLink {
    constructor(name, path, component, exact=false) {
        this.name = name
        this.path = path
        this.exact = exact // whether or not the path has to be exact
    }

    // Convert navbar link to a Router element
    getRoute() {
        let route = <Route path={this.path} component={this.component} />;
        if (this.exact) {
          route = <Route exact path={this.path} component={this.component} />
        }
        return route
    }
}
export default MyLink;