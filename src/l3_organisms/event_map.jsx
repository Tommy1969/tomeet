import styled from 'styled-components'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Div = styled.div`
  > div {
    height: 40vh;
  }
`

const TOKYO = [35.681236, 139.767125]

export const EventMap = () =>
  <Div>
    <MapContainer center={TOKYO} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={TOKYO}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  </Div>
