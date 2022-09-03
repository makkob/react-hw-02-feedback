import React from 'react'

export default function FeedbackOptions ({options , onLeaveFeedback}) {
  return (
    <div> 
      <h1>Leave your feedback</h1>
       {options.map((option , idx ) => {
        return <button onClick={()=>{onLeaveFeedback(option)}} type='button' key = {idx} id = {idx} >{option} </button>
       })}


    </div>
  )
}
