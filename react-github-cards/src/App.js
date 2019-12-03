import React from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";

class App extends React.Component {
  state = {
    user: []
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/spencer-mcguire")
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log("HOLD ON: ", err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Github Users Project</h1>
        </header>
        <section className="container">
          <Card i={this.state.user} />
        </section>
      </div>
    );
  }
}

export default App;
