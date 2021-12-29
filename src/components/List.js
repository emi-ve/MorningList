import React from "react";

export default function List(props) {
    return (
        <li className="list stack-small">
        <div className="c-cb">
          <label className="list-label" htmlFor= {props.id}>
            {props.name}
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn">
            Edit <span className="visually-hidden"> {props.name}</span>
          </button>
          <button type="button" className="btn btn__danger">
            Delete <span className="visually-hidden"> {props.name}</span>
          </button>
        </div>
      </li>
    );
  }