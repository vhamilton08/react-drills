import React, { Component } from 'react';
import './App.css';
import Image from "./Component/Image"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://th.bing.com/th/id/OIP.8AhRL9eCWqJXBOBMhcfzVwHaEK?pid=Api&rs=1"} />
      </div>
    )
  }
}
export default App;
