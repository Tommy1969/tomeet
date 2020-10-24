import React from 'react'

export const EventEntry = ({id, ...props}) =>
  <div>
    <label htmlFor={id}>イベント名</label>
    <input id={id} />
  </div>
