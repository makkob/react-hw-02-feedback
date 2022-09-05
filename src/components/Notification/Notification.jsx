import React from 'react'
import PropTypes from "prop-types";

export default function ({message}) {
  return (
    <div>
     <h2>{message}</h2>
    </div>
  )
}

Notification.defaultProps = {
  message: "No message",
};

Notification.propTypes = {
  message: PropTypes.string,
};