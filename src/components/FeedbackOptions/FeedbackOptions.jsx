import React from 'react'

export default function FeedbackOptions ({options , onLeaveFeedback}) {
  return (
    <div> 
      
       {options.map((option , idx ) => {
        return <button onClick={()=>{onLeaveFeedback(option)}} type='button' key = {idx} id = {idx} >{option} </button>
       })}


    </div>
  )
}
