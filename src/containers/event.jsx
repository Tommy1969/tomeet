import {atom, useRecoilState} from 'recoil'
import {EventPage} from '../l5_pages/event_page'
import {Store} from '../modules/store'

const store = new Store('event')
const eventState = atom({
  key:        'eventState',
  default:    {
    title:    '',
    place:    '',
    position: [35.681236, 139.767125],
    current:  null,
    focus:    null,
    events:   store.load([])
  },
  persistence_UNSTABLE: {type: 'log'}
})

export const EventContainer = props => {
  const [state, setState] = useRecoilState(eventState)

  const handle = {
    // フォームハンドラー
    handleChange: e => {
      setState({...state, [e.target.name]: e.target.value})
    },
    handleSave: e => {
      const events = [...state.events, {
        title:    state.title,
        place:    state.place,
        position: state.position
      }]
      setState({...state, events: events})
      store.save(events)
    },
    // Map ハンドラー
    handleMark: latlng => {
      setState({...state, position: latlng})
    },
    handleCurrent: latlng => {
      setState({...state, current: latlng})
    },
    // 一覧操作
    handleFocus: idx => {
      setState({...state, focus: idx, ...state.events[idx]})
    }
  }

  return (
    <EventPage {...state} {...handle} />
  )
}
