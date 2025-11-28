/* eslint-disable no-unused-vars */
import React from 'react'

export default function Clock() {
  let time = new Date();
  const hours = time.getHours();
  let className = '';
  if (hours >= 0 && hours <= 6) {
    className = 'night';
  } else {
    className = 'day';
  }

  return(
    <div>
      <h1>Now its time {time.toLocaleTimeString()}</h1>
    </div>
  )
}

