/* Defines a page link */
import React from "react";

class MyLink {
    constructor(name, path, component, exact=false) {
        this.name = name
        this.path = path
        this.exact = exact // whether or not the path has to be exact
    }
}
export default MyLink;