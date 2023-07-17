import { useEffect, useRef } from "react";
import { Wrapper } from "./Styled";

async function initMap(root) {
    const { Map } = await window.google.maps.importLibrary("maps");
  
    return new Map(root, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }

export const Map = () => {
    const mapRef = useRef();
    const mapInstanceRef = useRef();

    const init = async () => {
        mapInstanceRef.current = await initMap(mapRef.current);
    }

    useEffect(() => {
        if (mapRef.current && !mapInstanceRef.current) {
            init()
        }
    }, [ mapRef.current ])

    return <Wrapper ref={mapRef} />
}