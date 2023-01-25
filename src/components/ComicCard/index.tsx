import {
  Container,
  ImageContainer,
  Image,
  Title,
  DetailsContainer,
  Author,
  Year,
} from "./styles";
import { Comic } from "../../interfaces/Comic";

const ComicCard = ({ id, title, thumbnail, resourceURI, creators }: Comic) => {
  const creator = creators.items[0]?.name;

  return (
    <Container>
      <ImageContainer>
        <Image src={`${thumbnail.path + "/portrait_uncanny.jpg"}`} />
      </ImageContainer>
      <Title>{title}</Title>
      <DetailsContainer>
        <Author>{creator || "Autor Indisponível"}</Author>
        <Year></Year>
      </DetailsContainer>
    </Container>
  );
};

export default ComicCard;
