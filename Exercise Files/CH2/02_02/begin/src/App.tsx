import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    let aTuple: [string,number]=['Manny',42];
    enum Codes {first=1, second=2, third=3};
    let firstName:any = 1;
    const warning = ():void  => {
      console.warn('This is a warning message');
    }


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
             The value {firstName} is of { typeof firstName } type!
            {warning()}
          </p>



        </header>
      </div>
    );
  }
}

export default App;
