import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
import { Spinner } from "reactstrap";

const center = { lat: 48.8584, lng: 2.2945 };

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBolaMt1Pgxj9g4G3fdgy5rY4JDbnIgMas",
  });

  if (!isLoaded) {
    return (
      <Spinner className="m-5" color="primary">
        Loading Map...
      </Spinner>
    );
  }

  return (
    <div className="map-box">
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      ></GoogleMap>
    </div>
  );
};

export default Map;
