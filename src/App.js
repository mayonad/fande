import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='my-app' >
        <Item/>
      </div>
    );
  }
}

class Item extends Component {
  buy() {
     alert('The button works!');
   }

   render() {
     return (
       <div>
          <h4>Laptop</h4>
          <p>Core i7 - 8gb ram - 256gb SSD</p>
          <button onClick={this.buy}>Buy</button>
          <span> $500</span>
</div>
      );
  }
}



export default App;
