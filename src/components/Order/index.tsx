import {
  Container,
  ContentContainer,
  Title,
  ButtonsContainer,
  CancelButton,
  FinishButton,
  LoaderContainer,
  Loader,
  Message,
  TinyLoader,
} from "./styles";

import { useRef, useState } from "react";
import Maps from "../Maps";

type Props = {
  handleCancel: (value: null) => void;
  handleSetLocation: (adress: string) => void;
};

const Order = ({ handleCancel, handleSetLocation }: Props) => {
  const [mapIsLoaded, setMapIsLoaded] = useState(false);
  const [isFinishing, setIsFinishing] = useState(false);

  let positionRef: any = useRef(null);

  const handleFinish = () => {
    setIsFinishing(true);
    const { lat, lng } = positionRef.current.marker.position;

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      { location: { lat: lat(), lng: lng() } },
      (result, status) => {
        if (result) {
          console.log(result[0].address_components);
          const address = result[0].address_components
            .map((item, index) => (index < 5 ? item.short_name : null))
            .join(", ");
          handleSetLocation(address);
        }
      }
    );
    setIsFinishing(false);
  };

  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <ContentContainer show={mapIsLoaded}>
        <Title>Selecione seu endereço no mapa</Title>
        <Maps markerRef={positionRef} onLoadMap={setMapIsLoaded} />
        <ButtonsContainer>
          <CancelButton onClick={() => handleCancel(null)}>
            Cancelar
          </CancelButton>
          <FinishButton disabled={isFinishing} onClick={handleFinish}>
            {isFinishing ? <TinyLoader /> : "Finalizar"}
          </FinishButton>
        </ButtonsContainer>
      </ContentContainer>

      <LoaderContainer show={!mapIsLoaded}>
        <Loader />
        <Message>Mapa carregando...</Message>
      </LoaderContainer>
    </Container>
  );
};

export default Order;
