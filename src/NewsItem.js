import React from 'react'

function NewsItem(props) {
  let height = {
    height: "500px"
  }
  return (
    <>
    <div className="col">
    <div className="card" style={height}>
      <img src={props.idata} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.desc}</p>
      </div>
    </div>
  </div>

    </>
  )
}

export default NewsItem
