
import './App.css';
import Navbar from "./Mycomponent/Navbar";
import Newsitembox from "./Mycomponent/Newsitembox";

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar />
      <Newsitembox/>
      </>
    )
  }
}
