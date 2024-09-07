import React from 'react'

const NewsItems = (props) => {





    let { title, description, imageUrl, newsUrl, author, publishedAt, source} = props



    return (
      <div>
        <div className="card mb-3 me-3" style={{ width: "18rem" }}>
          <span className="position-absolute translate-middle badge rounded-pill bg-danger" style={{  zIndex: '1'   ,left: '84.5%', top: '10px',}}>
            {source}
          </span>
          <img src={!imageUrl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDVPuMlKfGrFErmCt6hCuECLbbhekJF-GCtAJvPIZpHX5upTT-hABFlp8qZY8rkgaZ0DE&usqp=CAU" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author? "Unknown": author} at {new Date(publishedAt).toGMTString()}</small></p>
            <a target='_blank' href={newsUrl} className="btn btn-primary btn-sm">Read more</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItems
