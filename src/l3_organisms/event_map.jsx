import 'leaflet/dist/leaflet.css'
import styled from 'styled-components'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Div = styled.div`
  > div {
    height: 40vh;
  }
`

export const EventMap = () =>
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
