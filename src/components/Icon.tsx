import L from 'leaflet';
import icon from './green.png';


export const redIcon = new L.Icon({
    iconUrl: icon,
    iconSize:     [70, 50], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76],
});

export const createClusterCustomIcon = (cluster: any) => {
    return L.divIcon({
        html: `<span>${cluster.getChildCount()}</span>`,
        className: 'marker-cluster-custom',
        iconSize: L.point(40, 40, true),
    })  
}