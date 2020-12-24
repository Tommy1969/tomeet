import {atom, useRecoilState} from 'recoil'
import {EventPage} from '../l5_pages/event_page'
import {Store} from '../modules/store'

const store = new Store('event')
const eventState = atom({
  key:        'eventState',
  default:    {
    title:    '',
    place:    '',
    pos_place: [35.681236, 139.767125],
    pos_current:  null,
    focus:    null,
    events:   store.load([])
  },
  persistence_UNSTABLE: {type: 'log'}
})

export const EventContainer = props => {
  const [state, setState] = useRecoilState(eventState)

  const handle = {
    // フォームハンドラー
    handleEntry: {
      handleChange: e => {
        setState({...state, [e.target.name]: e.target.value})
      },
      handleSave: e => {
        const events = [...state.events, {
          title:      state.title,
          place:      state.place,
          pos_place:  state.pos_place
        }]
        setState({...state, events: events})
        store.save(events)
      }
    },
    // Map ハンドラー
    handleMap: {
      handleMark: latlng => {
        setState({...state, pos_place: latlng})
      },
      handleCurrent: latlng => {
        setState({...state, pos_current: latlng})
      }  
    },
    // 一覧操作
    handleList: {
      handleFocus: idx => {
        setState({...state, focus: idx, ...state.events[idx]})
      }
    }
  }

  return (
    <EventPage {...state} {...handle} />
  )
}
