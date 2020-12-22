import {atom, useRecoilState} from 'recoil'
import {EventPage} from '../l5_pages/event_page'
import {Store} from '../modules/store'

const eventState = atom({
  key:        'eventState',
  default:    {
    title:    '',
    place:    '',
    position: [35.681236, 139.767125],
    focus:    null,
    events:   Store.load([])
  },
  persistence_UNSTABLE: {type: 'log'}
})

export const EventContainer = props => {
  const [state, setState] = useRecoilState(eventState)

  const handle = {
    handleChange: e => {
      setState({...state, [e.target.name]: e.target.value})
    },
    handleMark: latlng => {
      setState({...state, position: latlng})
    },
    handleSave: e => {
      const events = [...state.events, {
        title:    state.title,
        place:    state.place,
        position: state.position
      }]
      setState({...state, events: events})
      Store.save(events)
    },
    handleFocus: idx => {
      setState({...state, focus: idx, ...state.events[idx]})
    }
  }

  return (
    <EventPage {...state} {...handle} />
  )
}
