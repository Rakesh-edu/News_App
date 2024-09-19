import React from 'react'

const NewsItem = ({title,desc,src,url}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
        <div className="card" style={{width:'18rem'}}>
  <img src={src} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
