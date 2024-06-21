import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React, { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Map({ className, data }) {
  const reducers = useSelector((state) => state);
  const [key, setKey] = useState("AIzaSyBGCI6VhfWE1jB6028P21Xyasz4rQym4kA");
  const [lng, setLng] = useState("55.9762");
  const [lat, setLat] = useState("25.8007");

  useEffect(() => {
    if (data?.latitude) setLat(data?.latitude);
    if (data?.longitude) setLng(data?.longitude);
  }, [data]);

  useEffect(() => {
    if (
      reducers?.crud?.allReturned?.configurations &&
      reducers?.crud?.allReturned?.configurations?.filter(
        (item) => item?.key === "MAP_KEY"
      )[0]?.value
    ) {
      setKey(
        reducers?.crud?.allReturned?.configurations?.filter(
          (item) => item?.key === "MAP_KEY"
        )[0]?.value
      );
    }
  }, [reducers]);
  return (
    <LoadScript googleMapsApiKey={key}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={{
          lat: lat ? Number(lat) : 25.8007,
          lng: lng ? Number(lng) : 55.9762,
        }}
        zoom={7}
        className={className}
      >
        <Marker
          position={{
            lat: lat ? Number(lat) : 25.8007,
            lng: lng ? Number(lng) : 55.9762,
          }}
          clickable={true}
          onClick={(e) =>
            (window.location.href = `http://maps.google.com/?q=${lat},${lng}`)
          }
        />
      </GoogleMap>
    </LoadScript>
  );
}

export default memo(Map);
