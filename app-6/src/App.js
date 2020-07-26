import React, { Component } from 'react';
import './App.css';
import Todo from "./Component/Todo.js"

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      input: ""
}
this.handleAddList = this.handleAddList.bind(this)
  }
  handleInputChange(value) {
    this.setState({ input: value })
  }
  handleAddList() {
    this.setState({
      list: [... this.state.list, this.state.input],
      input: ""
})
  }
  render() {
    let list = this.state.list.map((el, i) => {
      return <Todo key={i} task={el} />
    })
    return (
      <div className="App">
        <h1>To Do List</h1>
        <div>
          <input value={this.state.input}
          placeholder="Enter new task"
          onChange={e => this.handleInputChange(e.target.value)}/>
          <button onClick={this.handleAddList}>Add</button>
        </div>
        <br />
        {list}
      </div>
    )
  }
} 



export default App;
