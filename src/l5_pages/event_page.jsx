import {EventMap} from '../l3_organisms/event_map'
import {EventEntry} from '../l3_organisms/event_entry'
import {EventList} from '../l3_organisms/event_list'

export const EventPage = ({id, title, place, pos_place, pos_current, events, focus, handleEntry, handleMap, handleList, ...props}) =>
  <>
    <EventEntry
      id            = {id}
      title         = {title}
      place         = {place}
      {...handleEntry}
      {...props}
      />
    <EventMap
      pos_place     = {pos_place}
      pos_current   = {pos_current}
      {...handleMap}
      />
    <EventList
      events        = {events}
      focus         = {focus}
      {...handleList}
      />
  </>
