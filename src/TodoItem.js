import React from "react";
import './TodoItem.css';
import image1 from '../src/assets/image1.jpg';

function TodoItem(props) {
  return (
 
<div className="col">
<div className="card shadow-sm">
<img src={ image1 } alt="" />
  <div className="card-body">
  <i className={`bi bi-check-square icona ${ props.completed && 'icona--active'}`}></i>
  <h4 className="card-title">{props.title}</h4>
    <p className={`card-text ${ props.completed && 'cardtext--active'}`}>{props.text}</p>
    <div className="d-flex justify-content-between align-items-center">
      <div className="btn-group">
        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
      </div>
      <small className="text-muted">9 mins</small>
    </div>
  </div>
</div>
</div>

  );
}

export { TodoItem };
