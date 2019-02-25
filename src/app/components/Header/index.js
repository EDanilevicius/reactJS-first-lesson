import React from "react";
import "./index.scss";
import data from "./data";

function Header() {
  return (
    <header className="Header">
      <h1>{data.name}</h1>
      <hr />
      <p className="Header--contact">
        {`${data.contacts.phone.label} ${data.contacts.phone.value}`}
      </p>
      <p className="Header--contact">
        {`${data.contacts.email.label} `}
        <a
          href="mailto:evaldas@pons.lt"
          target="blank"
          rel="noopener noreferrer"
        >
          {data.contacts.email.value}
        </a>
      </p>
      <p className="Header--summary">{data.summary}</p>
      <img
        className="Header--profile-image"
        alt={data.picture.alt}
        src={data.picture.src}
      />
    </header>
  );
}

export default Header;
