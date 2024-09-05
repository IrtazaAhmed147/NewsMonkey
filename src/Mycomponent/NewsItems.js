import React, { Component } from 'react'

export default class NewsItems extends Component {






  render() {


    let { title, description, imageUrl, newsUrl} = this.props



    return (
      <div>
        <div className="card mb-3 me-3" style={{ width: "18rem" }}>
          <img src={!imageUrl?"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ZI6DT7DPHRASRC2GXPSQRWDC4I.jpg&w=1440":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a target='_blank' href={newsUrl} className="btn btn-primary btn-sm">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}
