import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { todos } from './todos.json'
console.log(todos)

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
  }
  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-3 col-md-4">
          <div className='card mt-4'>
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge-pill badge-warning ml-2">{todo.priority}</span>
            </div>
            <div className="card-body">
            <p>{todo.description}</p>
            <p><mark>{todo.responsible}</mark></p>
            </div>
          </div>
        </div>
      )
    }
    )
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a className="text-white">Tareas
          <span className="badge badge-pill badge-light ml-2">
            {this.state.todos.length}
          </span>
          </a>
        </nav>
        <div className="container">
          <div className="row mt-4">
            {todos}
          </div>
        </div>

        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
