import styled from 'styled-components'
import {EventEntry} from '../l3_organisms/event_enty'

export const EventPage = ({id, title, place, ...props}) =>
  <EventEntry
    id = {id}
    title = {title}
    place = {place}
    {...props}
  />
