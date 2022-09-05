import React from 'react'
import PropTypes from "prop-types";

export default function Section({children, title }) {
  return (
    <div>
        <h1> {title}</h1>
        {children}
    </div>
    
  )
}

Section.defaultProps = {
    title: "Section default title",
  };
  
  Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  };