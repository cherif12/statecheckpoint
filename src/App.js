import React, { Component, useState } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "Cherif Sassi",
      bio: "Web developper",
      imgSrc: "PHOTO.jpg",
      profession: "Salesman",
      shows: true,
      count: 0,
      intervalId: 0,
    };
  }

  componentDidMount() {
    this.setState({
      intervalId: setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 1000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggle() {
    this.setState({ shows: !this.state.shows });
    if (!this.state.shows) {
      this.setState({ count: 0 });
    }
  }

  render() {
    return (
      <>
        {this.state.shows ? (
          <div className="Container">
            <img className="img" src={this.state.imgSrc} alt="0" />
            <p>Full name:</p>
            <h1>{this.state.fullName}</h1>
            <p>Bio:</p>
            <h1>{this.state.bio}</h1>
            <p>Profession:</p>
            <h1>{this.state.profession}</h1>
          </div>
        ) : (
          <h2 className="counter">Counter : {this.state.count} </h2>
        )}
        <br></br>
        <button className="btn" onClick={() => this.toggle()}>
          Click
        </button>
      </>
    );
  }
}

export default App;
