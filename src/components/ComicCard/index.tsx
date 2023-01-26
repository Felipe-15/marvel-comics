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

type Props = {
  onSelect: (comic: Comic) => void;
};

const ComicCard = ({
  id,
  title,
  pageCount,
  thumbnail,
  resourceURI,
  creators,
  series,
  onSelect,
}: Comic & Props) => {
  const creator = creators.items[0]?.name;

  return (
    <Container
      onClick={() =>
        onSelect({
          id: id,
          title: title,
          pageCount: pageCount,
          thumbnail: thumbnail,
          creators: creators,
          resourceURI: resourceURI,
          series: series,
        })
      }
    >
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
