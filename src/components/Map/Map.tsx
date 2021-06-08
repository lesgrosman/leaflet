import React, { useEffect } from 'react';
import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker, Tooltip, Popup, useMapEvents } from "react-leaflet";
import { connect } from "react-redux";
// import MarkerClusterGroup from 'react-leaflet-markercluster';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { markerIcon, createClusterCustomIcon, } from './Icon';
import LocationMarker from './LocationMarker';
import { setPlacePreviewVisibility, setSelectedPlace } from "../../store/actions";
import { IState, Place } from "../../store/models";
import AddMarker from "./AddMarker";

import "./Map.css";

const Map = ({
  isVisible,
  places,
  selectedPlace,
  togglePreview,
  setPlaceForPreview,
}: any) => {
  const defaultPosition: LatLngExpression = [50.07289976652078, 14.442052803912576]; // Paris position

  const showPreview = (place: Place) => {
    window.open(`https://maps.google.com/?q=${place.position.toString()}`, '_blank')
  };


  return (
    <div className="map__container">
      <MapContainer
        center={defaultPosition}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "80vh" }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
        <MarkerClusterGroup
          iconCreateFunction={createClusterCustomIcon}
        >
          
          {places.map((place: Place) => (
            <Marker
              icon={markerIcon}
              key={place.title}
              position={place.position}
              eventHandlers={{ click: () => showPreview(place) }}
            >
              <Tooltip>{place.title}</Tooltip>
            </Marker>

          ))}
        </MarkerClusterGroup>
        <AddMarker />
      </MapContainer>
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  const { places } = state;
  return {
    isVisible: places.placePreviewsIsVisible,
    places: places.places,
    selectedPlace: places.selectedPlace,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    togglePreview: (payload: boolean) =>
      dispatch(setPlacePreviewVisibility(payload)),
    setPlaceForPreview: (payload: Place) =>
      dispatch(setSelectedPlace(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);

