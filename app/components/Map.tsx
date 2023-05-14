"use client";

import React from "react";
import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// configuration to be able to use leaflet since it is not fully supported by React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
	iconUrl: markerIcon.src,
	iconRetinaUrl: markerIcon2x.src,
	shadowUrl: markerShadow.src
});

interface MapProps {
	center: number[];
}

const Map: React.FC<MapProps> = ({
	center,  // for the latitude and longitude
}) => {
	return ( 
		<div></div>
	);
}

export default Map;
