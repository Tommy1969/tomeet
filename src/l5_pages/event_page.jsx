import styled from 'styled-components'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {EventEntry} from '../l3_organisms/event_entry'
import {EventList} from '../l3_organisms/event_list'

const Div = styled.div`
  > div {
    height: 40vh;
  }
`

const EventMap = () =>
  <Div>
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} data-testid="HOGEHOGE">
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  </Div>


export const EventPage = ({id, title, place, events, ...props}) =>
  <>
    <EventEntry
      id      = {id}
      title   = {title}
      place   = {place}
      {...props}
      />
    <EventMap />
    <EventList
      events  = {events}
      />
  </>
