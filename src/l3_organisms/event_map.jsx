import {atom, useRecoilState} from 'recoil'
import styled from 'styled-components'
import "leaflet/dist/leaflet.css"
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet'
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetinaUrl,
  iconUrl: iconUrl,
  shadowUrl: shadowUrl
})

const positionState = atom({
  key:        'positionState',
  default:    [0, 0],
  persistence_UNSTABLE: {type: 'log'}
})

const Div = styled.div`
  > div {
    height: 40vh;
  }
`

/**
 * 位置をズラすための乱数を取得する
 */
function getMask() {
  const min = -0.03
  const max = 0.03
  return Math.random() * (max - min) + min;
}

export const EventMap = ({position, ...props}) => {
  const [current, setCurrent] = useRecoilState(positionState)
  navigator.geolocation.getCurrentPosition(pos => {
    setCurrent([pos.coords.latitude + getMask(), pos.coords.longitude + getMask()])
  })
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
          <Popup>イベント開催地</Popup>
        </Marker>
        <Marker position={current}>
        </Marker>
      </MapContainer>
    </Div>
  )
}
