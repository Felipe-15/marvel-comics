import {
  Background,
  Container,
  DataContainer,
  ImageContainer,
  Image,
  DetailsContainer,
  Title,
  Info,
  WishButton,
} from "./styles";
import { Comic } from "../../interfaces/Comic";

type Props = {
  handleBackgroundClick: ({}: Comic) => void;
};

const Modal = ({
  id,
  title,
  pageCount,
  thumbnail,
  creators,
  series,
  handleBackgroundClick,
}: Comic & Props) => {
  const creator = creators.items[0]?.name;

  return (
    <Background onClick={() => handleBackgroundClick({} as Comic)}>
      <Container>
        <DataContainer>
          <ImageContainer>
            <Image
              src={`${
                thumbnail.path + `/portrait_fantastic.${thumbnail.extension}`
              }`}
            />
          </ImageContainer>
          <DetailsContainer>
            <Title>{title}</Title>
            <Info>
              <strong>Autor:</strong> {creator || "Autor Indisponível"}
            </Info>
            <Info>
              <strong>Número de páginas:</strong> {pageCount || "Indisponível"}
            </Info>
            <Info>
              <strong>Série:</strong> {series.name || "Indisponível"}
            </Info>
          </DetailsContainer>
        </DataContainer>
        <WishButton>Encomendar</WishButton>
      </Container>
    </Background>
  );
};

export default Modal;
