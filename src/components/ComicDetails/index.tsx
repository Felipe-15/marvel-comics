import { Comic } from "../../interfaces/Comic";
import {
  Container,
  DataContainer,
  ImageContainer,
  Image,
  DetailsContainer,
  Title,
  Info,
  WishButton,
} from "./styles";

type Props = {
  handleOrder: (showOrder: boolean) => void;
};

const ComicDetails = ({
  id,
  title,
  pageCount,
  thumbnail,
  creators,
  series,
  handleOrder,
}: Comic & Props) => {
  const creator = creators.items[0]?.name;

  return (
    <Container onClick={(e) => e.stopPropagation()}>
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
      <WishButton onClick={() => handleOrder(true)}>Encomendar</WishButton>
    </Container>
  );
};

export default ComicDetails;
