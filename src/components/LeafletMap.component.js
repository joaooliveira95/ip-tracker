import customMarkerIcon from "../assets/icon-location.svg";
import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./LeafletMap.css";

const LeafletMap = ({ ipInfo }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    let map;

    if (
      ipInfo &&
      ipInfo.location &&
      ipInfo.location.lat &&
      ipInfo.location.lng
    ) {
      const { lat, lng } = ipInfo.location;
      map = L.map(mapRef.current).setView([lat, lng], 13);

      const customIcon = L.icon({
        iconUrl: customMarkerIcon,
        iconSize: [46, 56],
        iconAnchor: [23, 56],
        popupAnchor: [0, -56],
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);
      marker.bindTooltip(`IP: ${ipInfo.ip}`).openTooltip();
    }

    return () => {
      // Cleanup the map when the component is unmounted
      if (map) {
        map.remove();
      }
    };
  }, [ipInfo]);

  return <div id="map" ref={mapRef} className="leaflet-map" />;
};

export default LeafletMap;
