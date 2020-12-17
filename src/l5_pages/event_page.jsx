import styled from 'styled-components'
import {EventEntry} from '../l3_organisms/event_entry'
import {EventList} from '../l3_organisms/event_list'

export const EventPage = ({id, title, place, events, ...props}) =>
  <>
    <EventEntry
      id      = {id}
      title   = {title}
      place   = {place}
      {...props}
      />
    <EventList
      events  = {events}
      />
  </>
