import React, { Component } from "react";
import Todos from "./components/Todos";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "learn coding",
        completed: false,
      },
      {
        id: 2,
        title: "go for a walk",
        completed: false,
      },
      {
        id: 3,
        title: "watching series",
        completed: false,
      },
    ],
  };
  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos={this.state.todos} />

        <h1>App</h1>
      </div>
    );
  }
}

export default App;
