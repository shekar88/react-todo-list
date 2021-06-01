import React, { Component } from 'react'
// uuid
import uuid from 'uuid'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// TodoInput
import TodoInput from './Components/TodoInput'
// TodoList
import TodoList from './Components/TodoList'

class App extends Component {
  render() {
    // JSX
    return (
      <div className="App ">
        This is App Component
        <TodoInput></TodoInput>
        <TodoList></TodoList>
      </div>
    );
  }
}
export default App;
