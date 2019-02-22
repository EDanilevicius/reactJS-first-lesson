import React from "react";

function IconLink(props) {
  const { href, target, component: Component } = props;

  return (
    <a href={href} target={target} rel="noopener noreferrer">
      <Component />
    </a>
  );
}

export default IconLink;
