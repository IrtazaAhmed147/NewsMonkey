import React, { Component } from 'react'
import NewsItems from "./NewsItems";

export default class Newsitembox extends Component {
  render() {
    return (
      <div>
        <h3>This is news item box</h3>
        <div className='d-flex'>

        <NewsItems />
        <NewsItems />
        <NewsItems />
        </div>
        <NewsItems />
        <NewsItems />
      </div>
    )
  }
}
