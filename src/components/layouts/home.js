import React, { Component } from "react";
import { Pane } from "evergreen-ui";
import List from "./list";

class Home extends Component {
  render() {
    return (
      <Pane clearfix>
          <List />
      </Pane>
    );
  }
}

export default Home;
