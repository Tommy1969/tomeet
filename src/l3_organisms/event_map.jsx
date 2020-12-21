import 'leaflet/dist/leaflet.css'
import styled from 'styled-components'
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet'

const Div = styled.div`
  > div {
    height: 40vh;
  }
`

export const EventMap = ({position, ...props}) => {
  function MyComponent() {
    useMapEvent('click', (e) => {
      const latlng = [e.latlng.lat, e.latlng.lng]
      props.handleMark(latlng)
    })

    return null
  }

  return (
    <Div>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <MyComponent />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Div>
  )
}
