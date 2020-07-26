import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 constructor() {
  super() 
  this.state = {
    food: ["chicken", "pork", "popcorn", "salsa"]
} 
}
render(){
  let foods = this.state.food.map((el, i) => {
    return <h2 key={i}>{el}</h2>
  })
  return <div className="App">{foods}</div>
}
}
export default App;
   
