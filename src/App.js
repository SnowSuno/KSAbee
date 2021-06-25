import React from "react";
import Header from './component/Header.js';
import ProfileItemList from './component/ProfileItemList';

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
		    <Header/>
        <ProfileItemList/>
      </div>
    );
  }
}

export default App;
