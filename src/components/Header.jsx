import React from "react";
import globe from "../assets/globe.png";

export default function Header() {
  return (
    <h3 className="head">
      <img className="globe" src={globe} />
      My Travel Journal
    </h3>
  );
}
