import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

import data from "./data";

function Header(props) {
  const { language, onLanguage } = props;
  const { contacts, picture, name, summary } = data[language];

  return (
    <header className="Header">
      <h1>{name}</h1>
      <hr />
      <p className="Header--contact">
        {`${contacts.phone.label} ${contacts.phone.value}`}
      </p>
      <p className="Header--contact">
        {`${contacts.email.label} `}
        <a
          href="mailto:evaldas@pons.lt"
          target="blank"
          rel="noopener noreferrer"
        >
          {contacts.email.value}
        </a>
      </p>
      <p className="Header--summary">{summary}</p>
      <img
        className="Header--profile-image"
        alt={picture.alt}
        src={picture.src}
      />

      <select
        onChange={e => onLanguage(e.target.value)}
        className="Header--language-select"
      >
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="de">German</option>
      </select>
    </header>
  );
}

Header.propTypes = {
  language: PropTypes.oneOf(["en", "fr", "de"]),
  onLanguage: PropTypes.func.isRequired,
};

Header.defaultProps = {
  language: "en",
};

export default Header;
