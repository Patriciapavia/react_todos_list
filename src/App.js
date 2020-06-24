import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import uuid from "uuid";
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
  // toggle  complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  // delete todo item

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };
  // add todo
  addTodo = (title) => {
    const newTodo = {
      id: 4,
      title,
      //  title: title, same because key and value i s the same
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
          <AddTodo addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;
