import React from 'react'
import styles from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

export default function FeedbackOptions ({options , onLeaveFeedback}) {
  return (
    <div> 
      
       {options.map((option , idx ) => {
        return <button onClick={()=>{onLeaveFeedback(option)}} className={styles.buttons} type='button' key = {idx} id = {idx} >{option} </button>
       })}


    </div>
  )
}

FeedbackOptions.defaultProps = {
  options: ["good", "neutral", "bad"],
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};