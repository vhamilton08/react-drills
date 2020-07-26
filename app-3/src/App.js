import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      filterString: "",
      colors: ["blue", "green", "red", "pink"]
    }
  }
  handleChange(filter) {
    this.setState({ filterString: filter })
  }
  render() {
    let colorList = this.state.colors
    .filter((el, i) => {
      return el.includes(this.state.filterString)
    })
    .map((el, i) => {
      return <h2 key={i}>{el}</h2>
    })
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text"/>
        {colorList}
      </div>
    )
  }
}
  


export default App;
