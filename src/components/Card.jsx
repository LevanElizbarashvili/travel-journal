import React from "react";
import location from "../assets/location.png";

export default function Card(props) {
  return (
    <div className="card">
      <img className="image" src={`${props.imageUrl}`} />
      <div className="info">
        <h3 className="country">
          <img className="pin" src={location} />
          {props.location} <a href={props.googleMapsUrl}>View on Google maps</a>
        </h3>
        <h1>{props.title}</h1>
        <p className="dates">
          {props.startDate} {props.endDate}
        </p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
