import L from 'leaflet';
import icon from './images/green_transparent.png';
import current from './images/blue.png'


export const markerIcon = new L.Icon({
    iconUrl: icon,
    iconSize:     [60, 50], // size of the icon
    iconAnchor:   [30, 50], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76],
    className: 'marker-icon',
});

export const currentPositionIcon = new L.Icon({
    iconUrl: current,
    iconSize:     [45, 70], // size of the icon
    iconAnchor:   [22, 70], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76],
    className: 'marker-icon',
});


export const createClusterCustomIcon = (cluster: any) => {
    return L.divIcon({
        html: `<span>${cluster.getChildCount()}</span>`,
        className: 'marker-cluster-custom',
        iconSize: L.point(40, 40, true),
    })  
}