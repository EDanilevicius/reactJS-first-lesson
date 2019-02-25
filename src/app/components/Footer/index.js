import React from "react";
import "./index.scss";
import data from "./data";

import IconLink from "./IconLink";

function Footer() {
  return (
    <footer className="Footer">
      {data.map(({ href, icon }, index) => (
        <IconLink key={index} href={href} component={icon} />
      ))}
      {/* <IconLink
        href="https://www.linkedin.com/in/evaldas-danilevi%C4%8Dius/"
        target="_blank"
        component={FaLinkedinIn}
      />
      <IconLink
        href="https://github.com/EDanilevicius"
        target="_blank"
        component={FaGithub}
      /> */}
      {/* <a
        href="https://www.linkedin.com/in/evaldas-danilevi%C4%8Dius/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a> */}
      {/* <a
        href="https://github.com/EDanilevicius"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a> */}
    </footer>
  );
}

export default Footer;
