import React from 'react'
import PropTypes from 'prop-types'
import {EventEntry} from '../l5_pages/event_entry'

export const EventContainer = ({title, place, ...props}) => {
  return(
    <EventEntry
      title         = {title}
      place         = {place}
      handleChange  = {props.handleChange}
      handleSave    = {props.handleSave}
    />
  )
}
