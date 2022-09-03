import React from 'react'

export default function Statistics({good , neutral , bad , total,  positivePercentage}) {
  return (
    <div>
     <p>Good {good} </p>
     <p>Neutral {neutral}</p>
     <p>bad {bad}</p>
     <p>Total {total()}</p>
     <p>Positive percentage {positivePercentage()} % </p>
 
    </div>
 
  )
}
