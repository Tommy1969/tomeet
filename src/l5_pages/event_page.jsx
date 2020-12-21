import {EventMap} from '../l3_organisms/event_map'
import {EventEntry} from '../l3_organisms/event_entry'
import {EventList} from '../l3_organisms/event_list'

export const EventPage = ({id, title, place, position, events, focus, handleMark, handleFocus, ...props}) =>
  <>
    <EventEntry
      id          = {id}
      title       = {title}
      place       = {place}
      {...props}
      />
    <EventMap
      position    = {position}
      handleMark  = {handleMark}
      />
    <EventList
      events      = {events}
      focus       = {focus}
      handleFocus = {handleFocus}
      />
  </>
