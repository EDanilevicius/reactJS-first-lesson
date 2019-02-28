import React from "react";
import PropTypes from "prop-types";

function IconLink(props) {
  const { href, target, component: Component } = props;

  throw Error("Footer failed!");

  return (
    <a href={href} target={target} rel="noopener noreferrer">
      <Component />
    </a>
  );
}

IconLink.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
};

IconLink.defaultProps = {
  target: "_blank",
};

export default IconLink;
