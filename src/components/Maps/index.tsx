import { useEffect, useState, useCallback, RefObject } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

type Props = {
  onLoadMap: (value: boolean) => void;
  markerRef: RefObject<Marker>;
};

type CenterObject = {
  lat: number;
  lng: number;
};

const mapStyle = {
  width: "400px",
  height: "300px",
};

const Maps = ({ onLoadMap, markerRef }: Props) => {
  const [map, setMap] = useState();
  const [center, setCenter] = useState<CenterObject | null>(null);
  const [position, setPosition] = useState<[number, number] | []>([]);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_MAPS_KEY,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });

        setPosition([position.coords.latitude, position.coords.longitude]);
      },
      (error) => console.log("Erro na geolocalização: ", error)
    );
  }, []);

  const onLoad = useCallback((map: any) => {
    if (!center) return;
    const bounds = new google.maps.LatLng(center);

    map.fitBounds(bounds);

    setMap(map);
  }, []);
  const onUnmount = useCallback(() => {
    setMap(undefined);
  }, []);

  return isLoaded && center ? (
    <GoogleMap
      mapContainerStyle={mapStyle}
      zoom={12}
      onLoad={(map) => {
        onLoad(map);
        onLoadMap(true);
      }}
      onUnmount={onUnmount}
      center={center}
    >
      <Marker ref={markerRef} position={center} draggable />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Maps;
