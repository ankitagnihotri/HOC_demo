import React, { Component } from "react";
import Feed from "./components/Feed";
import "./App.css";

class App extends Component {
  state = {
      contacts: []
  };

  componentDidMount() {
    fetch("https://api.randomuser.me/?results=50")
      .then(response => response.json())
      .then(parsedResponse =>
        parsedResponse.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          thumbnail: user.picture.thumbnail
        }))
      )
      .then(contacts => this.setState({ contacts }));
  }

  render() {
      console.log("contacts", this.state.contacts);
    return (
      <div className="App">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="">
                HOC Demo app
              </a>
            </li>
          </ul>
        </nav>

        <Feed contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
