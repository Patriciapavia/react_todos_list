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
        completed: true,
      },
      {
        id: 3,
        title: "watching series",
        completed: false,
      },
    ],
  };

  render() {
    return (
      <div>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
