import {atom, useRecoilState} from 'recoil'
import {EventPage} from '../l5_pages/event_page'
import {Store} from '../modules/store'

const eventState = atom({
  key:        'eventState',
  default:    {
    title:    '',
    place:    '',
    position: [35.681236, 139.767125],
    events:   Store.load([])
  },
  persistence_UNSTABLE: {type: 'log'}
})

export const EventContainer = props => {
  const [state, setState] = useRecoilState(eventState)

  const handle = {
    change: e => {
      setState({...state, [e.target.name]: e.target.value})
    },
    mark: latlng => {
      setState({...state, position: latlng})
    },
    save: e => {
      const events = [...state.events, {
        title:    state.title,
        place:    state.place,
        position: state.position
      }]
      setState({...state, events: events})
      Store.save(events)
    }
  }

  return (
    <EventPage
      title         = {state.title}
      place         = {state.place}
      position      = {state.position}
      events        = {state.events}
      handleChange  = {handle.change}
      handleSave    = {handle.save}
      handleMark    = {handle.mark}
    />
  )
}
