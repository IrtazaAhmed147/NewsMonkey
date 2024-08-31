
import './App.css';
import Navbar from "./Mycomponent/Navbar";
import News from "./Mycomponent/News";

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar />
      <News/>
      </>
    )
  }
}

// API key
// 57b510932495419f9c96cb27e56e45b8