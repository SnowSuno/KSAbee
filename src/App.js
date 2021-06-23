import React from "react";
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {title: null}
  }

  callAPI() {
    fetch("api")
        .then(res => res.json())
        .then(data => this.setState({title: data.title}));
  }

  componentDidMount() {
    this.callAPI()
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            {this.state.title
            ? <h1>{this.state.title}</h1>
            : <h1>Loading...</h1>}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
