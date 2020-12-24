import styled from 'styled-components'
import PropTypes from 'prop-types'
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

export const EventMap = ({position, current, ...props}) => {
  if (props.handleCurrent) {
    navigator.geolocation.getCurrentPosition(pos => {
      props.handleCurrent && props.handleCurrent([pos.coords.latitude + getMask(), pos.coords.longitude + getMask()])
    })
  }
  function MyComponent() {
    useMapEvent('click', (e) => {
      const latlng = [e.latlng.lat, e.latlng.lng]
      props.handleMark && props.handleMark(latlng)
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
        {current &&
          <Marker position={current}>
          </Marker>
        }
      </MapContainer>
    </Div>
  )
}

EventMap.defaultProps = {
  position:       [35.681236, 139.767125]
}

EventMap.propTypes = {
  position:       PropTypes.arrayOf(PropTypes.number),  // 開催地
  current:        PropTypes.arrayOf(PropTypes.number),  // 現在地
  handleMark:     PropTypes.func,
  handleCurrent:  PropTypes.func
}
