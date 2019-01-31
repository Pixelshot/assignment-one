import React, { Component } from "react";
import UserInput from "./UserInput";
import UserOutput from "./UserOutput";

class App extends Component {
  state = {
    usernames: [{ user: "Ladiesman217" }, { user: "Bladerunner 2049" }]
  };

  alternateHandler() {
    this.setState({
      usernames: [{ user: "Optimus" }, { user: "Detective" }]
    });
  }

  incomingInputHandler = event => {
    this.setState({
      usernames: [{ user: event.target.value }, { user: "Working As Intended" }]
    });
  };
  render() {
    return (
      <div className="App">
        <UserInput reciprocate={this.incomingInputHandler.bind(this)} />
        <UserOutput
          username1={this.state.usernames[0].user}
          username2={this.state.usernames[1].user}
          clicky={this.alternateHandler.bind(this)}
        />
      </div>
    );
  }
}

export default App;
