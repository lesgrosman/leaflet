import React from 'react';
import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker, Tooltip, Popup, useMapEvents } from "react-leaflet";

const LocationMarker = () => {
  const [ position, setPosition, ] = React.useState<any>();


  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    }
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  ) 
}

export default LocationMarker;


