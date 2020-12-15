import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { authorize } from './Authorization/Authorize';
import { AxiosResponse } from 'axios';

class App extends Component<{}, { authResponse: AxiosResponse }> {
  constructor(props: any) {
    super(props);
    this.getAuthResponse = this.getAuthResponse.bind(this);
    // this.state = {
    //   authResponse:
    // }
  }

  async getAuthResponse() {
    await authorize()
    // this.setState({
    //   authResponse: 
    // });
  }

  render () {
    // const { authResponse } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <button onClick={this.getAuthResponse}>Authorize!</button>
        {/* <p>Code challenge: {authResponse}</p> */}
      </div>
    );
  }
}

export default App;
