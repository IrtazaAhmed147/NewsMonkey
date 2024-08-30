import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    return (
      <div>
        <div className="card mb-3 me-3" style={{width: "18rem"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-MmdEUowHR7WrpjFbA1nFJ90OYkGlNbCsTWF5ZhngAiKtayRRM5-bqbybfHUxO-9sgA&usqp=CAU" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }
}
