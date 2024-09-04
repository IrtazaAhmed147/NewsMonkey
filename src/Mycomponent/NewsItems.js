import React, { Component } from 'react'

export default class NewsItems extends Component {






  render() {


    let { title, description, imageUrl, newsUrl} = this.props



    return (
      <div>
        <div className="card mb-3 me-3" style={{ width: "18rem" }}>
          <img src={!imageUrl?"https://stat4.bollywoodhungama.in/wp-content/uploads/2024/08/SRK_Net_Worth_Revealed.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a target='_blank' href={newsUrl} className="btn btn-primary btn-sm">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}
