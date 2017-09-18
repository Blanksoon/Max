import { compose } from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'

const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props => (
  <GoogleMap
    defaultZoom={18}
    defaultCenter={{ lat: 12.928786, lng: 100.899449 }}
  >
    <Marker position={{ lat: 12.928786, lng: 100.899449 }} />
  </GoogleMap>
))

export { MapWithAMarker }
