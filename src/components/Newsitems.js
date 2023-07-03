import React from 'react'

export default function Newsitems(props) {
  
  return (
    <>
    <span className="badge rounded-pill text-bg-success" style={{width:"8rem" ,jdisplay:"flex",float:"right"}}>{props.source.name}</span>
    <div className="card my-4 col-md-4 mx-3" style={{width: "18rem"}}>
    
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          {props.dec}
        </p>
        <a href={props.url} target='_blank' className="btn btn-primary">
          Read more
        </a>
        <p className="card-text"><small className="text-muted">By {!props.author ? "Unknown" : props.author} on  {new Date(props.date).toGMTString()}</small></p>
      </div>
    </div>
    </>
  )
}
