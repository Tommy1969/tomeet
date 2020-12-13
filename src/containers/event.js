import {atom, useRecoilState} from 'recoil'

import {EventPage} from '../l5_pages/event_page'
import {Store} from '../modules/store'

const init = () => {
  return Store.load({title: '', place: ''})
}

const eventState = atom({
  key:                  'eventState',
  default:              init(),
  persistence_UNSTABLE: {type: 'log'}
})

export const EventContainer = props => {
  const [event, setEvent] = useRecoilState(eventState)

  const handle = {
    change: e => {
      setEvent({...event, [e.target.name]: e.target.value})
    },
    save: e => {
      Store.save(event)
    }
  }

  return (
    <EventPage
      title         = {event.title}
      place         = {event.place}
      handleChange  = {handle.change}
      handleSave    = {handle.save}
    />
  )
}
