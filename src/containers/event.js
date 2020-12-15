import {atom, useRecoilState} from 'recoil'
import {EventPage} from '../l5_pages/event_page'
import {Store} from '../modules/store'

const eventState = atom({
  key:                  'eventState',
  default:              {
    title: '',
    place: '',
    events: Store.load([])
  },
  persistence_UNSTABLE: {type: 'log'}
})

export const EventContainer = props => {
  const [state, setState] = useRecoilState(eventState)

  const handle = {
    change: e => {
      setState({...state, [e.target.name]: e.target.value})
    },
    save: e => {
      const events = [...state.events, {
        title: state.title,
        place: state.place
      }]
      setState({...state, events: events})
      Store.save(events)
    }
  }

  return (
    <EventPage
      title         = {state.title}
      place         = {state.place}
      events        = {state.events}
      handleChange  = {handle.change}
      handleSave    = {handle.save}
    />
  )
}
