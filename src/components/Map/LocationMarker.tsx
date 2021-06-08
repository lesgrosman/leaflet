import React from 'react';
import L, { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker, Tooltip, Popup, useMapEvents, useMap, } from "react-leaflet";
import { currentPositionIcon } from './Icon';

const LocationMarker = () => {
  const [ position, setPosition, ] = React.useState<any>(null);
  const map = useMap();

  React.useEffect(() => {
    map.locate({
      enableHighAccuracy: true,
      setView: true,
    }).on('locationfound', (e) => {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom());
      // const radius = e.accuracy;
      // const circle = L.circle(e.latlng, radius);
      // circle.addTo(map);
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={currentPositionIcon}>
      <Popup>
        You are here.
      </Popup>
    </Marker>
  )
}

export default LocationMarker;


